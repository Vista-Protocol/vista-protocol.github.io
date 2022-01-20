import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Position from './Position';
import Index from './Index';
import Amm from './Amm';

import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import abi from '../../contract/abi.json';

const options = {
    chain: 'avalanche testnet',
    address: '0xC24Fe6B210da4Db13eB69cff191692755948BF58',
    abi,
}

export default function DirectionStack() {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    const Web3Api = useMoralisWeb3Api()

    const [ammState, setAmmState] = React.useState();
    const [position, setPosition] = React.useState();

    const getAmmState = async () => {
        var keys = 'quote base k price'.split(' ');
        const promises = keys.map(function_name => (
            Web3Api.native.runContractFunction({
                function_name,
                ...options,
            })
        ));

        const values = await Promise.all(promises);
        const [
            quote_asset_amount, base_asset_amount, k, mark_price,
        ] = values;
        const obj = {
            quote_asset_amount, base_asset_amount, k, mark_price,
        };

        return obj;
    }

    const getPosition = async () => {
        if (!user.get('ethAddress')) {
            return;
        }

        var keys = 'get_balance get_usdt get_index'.split(' ');
        const promises = keys.map(function_name => (
            Web3Api.native.runContractFunction({
                function_name,
                ...options,
            })
        ));

        const values = await Promise.all(promises);
        const [ balance, usdt, index ] = values;
        const obj = { balance, usdt, index };

        return obj;
    }

    React.useEffect(() => {
        getPosition().then(setPosition);
        getAmmState().then(setAmmState);
    }, [])

    if (!ammState) {
        return <div />;
    }

    console.log(position)

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Position
                    position={position}
                />

                <Amm
                    ammState={ammState}
                />
            </Stack>
        </div>
    );
}
