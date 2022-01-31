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

# load contract data
with open('addresses.json') as f:
    addresses = json.load(f)
    contract_address = addresses['address_avaperps']
with open('abi_avaperps.json') as f:
    abi = json.load(f)

contract = w3.eth.contract(address=contract_address, abi=abi)
account = '0x42B221DFf0A38c56409032bD2b1D3E6f7cAEdb4B'
w3.eth.defaultAccount = account

peg_multiplier = 10 ** 8

def get_quotes(symbols: list) -> dict:
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'

    symbols_csv = ','.join(symbols)
    parameters = {
        'symbol': symbols_csv,
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

    def rebalance():
        print('\nREBALANCE')

        amounts = np.around(
            np.reciprocal(prices) * index_price / 10
        )
        amounts = list(map(int, amounts))
        print('amounts', amounts)

        print('index_price', np.dot(amounts, prices) / peg_multiplier)

        send_transaction(
            contract.functions.set_amounts(
                amounts
            )
        )

    symbols, amounts, prices, index_price = contract.functions.composition().call()
    print('symbols', symbols)
    print('amounts', amounts)
    print('stored prices', prices)
    print('index_price', index_price)

    # ids = [1975, 2539, 4056, 5631, 5805, 5821, 5829, 5892, 6758, 6951]
    # amounts = [4649, 243088, 97247, 21144, 1225, 136061, 82415, 4308, 16866, 7853076]

    quotes = get_quotes(symbols)
    symbols_uppercase = [
        symbol.upper()
        for symbol in symbols
    ]
    quotes_frame = pd.DataFrame(quotes).transpose().loc[symbols_uppercase]
    print(quotes_frame)

    prices = [
        row['USD']['price']
        for row in quotes_frame['quote']
    ]
    print('actual prices', prices)

    # check token replacement
    if not all(amounts):
        rebalance()
        return

    # below updates price and
    # checks normal rebalancing, if one component exceeds 20% weight

    values = np.multiply(amounts, prices)
    print('values', values)

    index_price = sum(values)
    print('index_price', index_price / peg_multiplier)
    
    print('weights', values / index_price * 100)

    if any(values > index_price / 5):
        rebalance()

    send_transaction(
        contract.functions.set_index_price(
            round(index_price)
        )
    )

main()

def pubsub(event, context):
    main()
