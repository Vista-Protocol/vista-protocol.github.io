import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Position from './Position';
import Amm from './Amm';
import Loading from './Loading';

import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import abi from '../../contract/abi.json';
import Web3 from 'web3';

const contractAddress = '0xC24Fe6B210da4Db13eB69cff191692755948BF58';

// contract details below
const options = {
    chain: 'avalanche testnet',
    address: '0xC24Fe6B210da4Db13eB69cff191692755948BF58',
    abi,
}

export default function DirectionStack({ contract }) {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    const Web3Api = useMoralisWeb3Api()

    const [ammState, setAmmState] = React.useState();
    const [position, setPosition] = React.useState();

    const account = user.get('ethAddress');

    const getAmmState = async () => {
        const promises = [
            contract.methods.quote().call(),
            contract.methods.base().call(),
        ];

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
        // getAmmState().then(setAmmState);
    }, [])

    if (!position) {
        return (
            <div>
                {/* <Loading /> */}
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
