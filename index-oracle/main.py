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

provider = 'https://api.avax-test.network/ext/bc/C/rpc'
w3 = Web3(Web3.HTTPProvider(provider))
w3.middleware_onion.inject(geth_poa_middleware, layer=0)

contract_address = '0xdE92F3dBd6fbaAc2c11285eB8E2CBf860408e652'
with open('abi.json') as f:
    abi = json.load(f)

contract = w3.eth.contract(address=contract_address, abi=abi)
w3.eth.defaultAccount = '0xc59E499d8E789986A08547ae5294D14C5dd91D9f'


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

def main() -> int:
    component_ids, component_weights = contract.functions.composition().call()
    print('component_ids', component_ids)
    print('component_weights', component_weights)

    # component_ids = [1975, 2539, 4056, 5631, 5805, 5821, 5829, 5892, 6758, 6951]
    component_weights = [4649, 243088, 97247, 21144, 1225, 136061, 82415, 4308, 16866, 7853076]

    quotes = get_quotes(component_ids)
    quotes_frame = pd.DataFrame(quotes).transpose()

    component_prices = [
        row['USD']['price']
        for row in quotes_frame['quote']
    ]
    print('component_prices', component_prices)

    weighted_prices = np.multiply(component_weights, component_prices)
    print('weighted_prices', weighted_prices)

    index_price = sum(weighted_prices)
    print('index_price', index_price)
    
    print('adjusted_weight', weighted_prices / index_price * 100)

    if any(weighted_prices > index_price / 5):
        component_weights = np.around(
            np.reciprocal(component_prices) * index_price / 10
        )
        component_weights = list(map(int, component_weights))
        print(component_weights)

        component_ids = 10 * [False]

        contract.functions.set_weights(component_weights).transact()

main()

def call(event, context):
    main()