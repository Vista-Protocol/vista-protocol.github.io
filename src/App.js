import React from "react";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Moralis from 'moralis';
import { useMoralis } from "react-moralis";
import Web3 from 'web3';

import Trade from './pages/Trade/Trade';
import DepositButton from './pages/TopBar/DepositButton';
import TopBar from './pages/TopBar/TopBar';
import logo from './static/logo.svg';
import SelectPerp from './SelectPerp';

import abi_avaperps from './contracts/abi_avaperps.json';
import abi_erc20copy from './contracts/abi_erc20copy.json';

const address_avaperps = '0x351Cee25E38FF6b8b9BF1044658e71847C518d1f';
const address_erc20copy = '0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C';

const drawerWidth = 240;

export default function ResponsiveDrawer() {
    const { user } = useMoralis();
    const [contract_avaperps, set_contract_avaperps] = React.useState();
    const [contract_erc20copy, set_contract_erc20copy] = React.useState();
    const [net_id, set_net_id] = React.useState();
    const [perp, set_perp] = React.useState(0);

    const get_net_id = async () => {
        console.log(Web3);
        if (Web3.givenProvider === null) {
            return;
        }
        const web3 = new Web3(Web3.givenProvider);
        let resp;

        resp = await web3.eth.net.getId();
        set_net_id(resp);

        resp = new web3.eth.Contract(abi_avaperps, address_avaperps);
        set_contract_avaperps(resp);
        
        resp = new web3.eth.Contract(abi_erc20copy, address_erc20copy);
        set_contract_erc20copy(resp);
    }

    React.useEffect(() => {
        get_net_id();
    }, [perp]);

    const perps = 'avax btc eth link'.toUpperCase().split(' ');
    const perp_name = perps[perp];

    return (
        <Box
            sx={{ display: 'flex' }}
            style={{
                background: 'linear-gradient(black, fireBrick)',
                height: '100vh'
            }}
        >
            <CssBaseline />
                <TopBar
                    contract_erc20copy={contract_erc20copy}
                    contract_avaperps={contract_avaperps}
                />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Trade
                    contract_erc20copy={contract_erc20copy}
                    contract_avaperps={contract_avaperps}
                    net_id={net_id}
                    perp_name={perp_name}
                    perp={perp}
                    address_avaperps={address_avaperps}
                >
                    <SelectPerp
                        perp={perp}
                        perps={perps}
                        set_perp={set_perp}
                    />
                </Trade>
            </Box>
        </Box>
    );
}
