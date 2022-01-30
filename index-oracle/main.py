'''
pub sub function
run every 6 minutes
    10/hr, 240/day
    or every 5 mins, 300/day

recieve ids and amounts as parameters
get prices
np.dot(prices, amounts)
if any product > .2, rebalance
    do rdiv(.1) and update amounts in contract

update scalar price state variable in contract
    how frontend and contract access price
'''

import requests
import json

import pandas as pd
import numpy as np

from web3 import Web3
from web3.middleware import geth_poa_middleware

from dotenv import load_dotenv
import os

load_dotenv()
CMC_PRO_API_KEY = os.getenv('CMC')
private_key = os.getenv('private_key')

provider = 'https://api.avax-test.network/ext/bc/C/rpc'
provider = 'https://speedy-nodes-nyc.moralis.io/ca66f16031f65e247cfa902a/avalanche/testnet'
w3 = Web3(Web3.HTTPProvider(provider))
w3.middleware_onion.inject(geth_poa_middleware, layer=0)

contract_address = '0x92E8D075eadB70323269b4aB45eFE5956b8d01B9'
with open('abi.json') as f:
    abi = json.load(f)

contract = w3.eth.contract(address=contract_address, abi=abi)
account = '0x42B221DFf0A38c56409032bD2b1D3E6f7cAEdb4B'
w3.eth.defaultAccount = account

peg_multiplier = 10 ** 6

def get_quotes(component_ids: list) -> dict:
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    component_ids_csv = ','.join([
        str(x)
        for x in component_ids
    ])
    parameters = {
        'id': component_ids_csv,
    }
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': CMC_PRO_API_KEY,
        'Accept-Encoding': 'deflate, gzip'
    }

    resp = requests.get(
        url,
        headers=headers,
        params=parameters
    ).json()

    return resp['data']

# must be setter function
def send_transaction(function):
    nonce = w3.eth.getTransactionCount(account)
    txn_dict = function.buildTransaction({
        'nonce': nonce
    })
    signed_txn = w3.eth.account.signTransaction(txn_dict, private_key=private_key)
    result = w3.eth.sendRawTransaction(signed_txn.rawTransaction)
    return result

def main() -> int:
    component_ids, component_amounts = contract.functions.composition().call()
    print('component_ids', component_ids)
    print('component_amounts', component_amounts)

    # component_ids = [1975, 2539, 4056, 5631, 5805, 5821, 5829, 5892, 6758, 6951]
    # component_amounts = [4649, 243088, 97247, 21144, 1225, 136061, 82415, 4308, 16866, 7853076]

    quotes = get_quotes(component_ids)
    quotes_frame = pd.DataFrame(quotes).transpose()

    component_prices = [
        row['USD']['price']
        for row in quotes_frame['quote']
    ]
    print('component_prices', component_prices)

    component_values = np.multiply(component_amounts, component_prices)
    print('component_values', component_values)

    index_price = sum(component_values)
    print('index_price', index_price / peg_multiplier)
    
    print('component_weights', component_values / index_price * 100)

    if any(component_values > index_price / 5):
        print('\nREBALANCE')

        component_amounts = np.around(
            np.reciprocal(component_prices) * index_price / 10
        )
        component_amounts = list(map(int, component_amounts))
        print('component_amounts', component_amounts)

        print('index_price', np.dot(component_amounts, component_prices) / peg_multiplier)

        txn_hash = send_transaction(
            contract.functions.set_amounts(component_amounts)
        )
        print('txn_hash', txn_hash)

    return index_price

# main()

def cors_enabled_function(request):
    # For more information about CORS and CORS preflight requests, see:
    # https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request

    # Set CORS headers for the preflight request
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    # Set CORS headers for the main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    return {
        'data': main()
    }