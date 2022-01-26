import * as React from 'react';
import Stack from '@mui/material/Stack';

import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import axios from 'axios';
import CoinMarketCap from 'coinmarketcap-api';

import Position from './Position';
import Amm from './Amm';
import Loading from './Loading';

const CMC_PRO_API_KEY = '3d286c45-bb8c-483f-8165-6a89567c11d0';
const client = new CoinMarketCap(CMC_PRO_API_KEY);

async function get_quotes() {
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    const ids = '1975,2539,4056,5631,5805,5821,5829,5892,6758,6951'
    const params = {
        'id': ids,
    }

    const CMC = '3d286c45-bb8c-483f-8165-6a89567c11d0';
    const headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': CMC,
        // 'Accept-Encoding': 'deflate, gzip'
    }

    const resp = await axios.get(url, { params, headers });
    return resp.data;
}

export default function DirectionStack({ contract }) {
    const { user } = useMoralis();
    const { token } = useMoralisWeb3Api();
    const [position, setPosition] = React.useState();

    const account = user.get('ethAddress');

    const getPosition = async () => {
        const composition = await contract.methods.composition().call();
        console.log(composition);

        // avax contract address
        const address = '0x1ce0c2827e2ef14d5c4f29a091d735a204794041';
        // const chain = 'avalanche';
        // const price = await token.getTokenPrice({ address });
        // console.log(price);

        const id = [1975,2539,4056,5631,5805,5821,5829,5892,6758,6951];
        // const resp = await client.getQuotes({ id });
        // console.log(resp);

        const promises = [
            contract.methods.quote().call(),
            contract.methods.base().call(),
            contract.methods.balanceOf(account).call(),
            contract.methods.usdt(account).call(),
            contract.methods.index(account).call(),
        ];

        const values = await Promise.all(promises);
        const [ quote, base, balance, usdt, index ] = values;
        const obj = { quote, base, balance, usdt, index };

        console.log(user.get('ethAddress'));
        console.log(obj);

        return obj;
    }

    React.useEffect(() => {
        getPosition().then(setPosition);
    }, [])

    if (!position) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Position
                    position={position}
                    contract={contract}
                />

                <Amm
                    position={position}
                />
            </Stack>
        </div>
    );
}
