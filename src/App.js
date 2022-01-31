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
import Faucet from './pages/Faucet/Faucet';
import TopBar from './pages/TopBar/TopBar';
import SelectPerp from './SelectPerp';

import abi_avaperps from './contracts/abi_avaperps.json';
import abi_erc20copy from './contracts/abi_erc20copy.json';
import { address_erc20copy, address_avaperps } from './contracts/addresses.json';

const drawerWidth = 0;

export default function ResponsiveDrawer() {
    const { user } = useMoralis();
    const [contract_avaperps, set_contract_avaperps] = React.useState();
    const [contract_erc20copy, set_contract_erc20copy] = React.useState();
    const [net_id, set_net_id] = React.useState();
    const [perp, set_perp] = React.useState(1);
    const [page, set_page] = React.useState('faucet');

    const get_net_id = async () => {
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

    if (contract_avaperps == null) {
        get_net_id();
    }    

    const perps = 'index avax btc eth link'.toUpperCase().split(' ');
    const perp_name = perps[perp];

    const trade = (
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
    );
    const faucet = (
        <Faucet
            contract_erc20copy={contract_erc20copy}
        />
    );
    const pages = { trade, faucet }

    return (
        <Box
            sx={{ display: 'flex' }}
            style={{
                background: 'linear-gradient(black, firebrick)',
                height: '100vh'
            }}
        >
            <CssBaseline />
            <TopBar
                contract_erc20copy={contract_erc20copy}
                contract_avaperps={contract_avaperps}
                address_avaperps={address_avaperps}
                address_erc20copy={address_erc20copy}
                pages={pages}
                set_page={set_page}
            />

            <Box m={9}>
                
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
