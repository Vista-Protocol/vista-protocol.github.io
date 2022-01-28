import React from "react";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useMoralis } from "react-moralis";
import Web3 from 'web3';

import Trade from './pages/Trade/App';
import DepositButton from './pages/TopBar/DepositButton';
import Login from './pages/TopBar/Login';
import logo from './static/logo.svg';

import abi_avaperps from './contracts/abi_avaperps.json';
import abi_erc20copy from './contracts/abi_erc20copy.json';

const address_avaperps = '0xAe23435Ab0edcaD26A097Fd1ebD6c4E5b49392A7';
const address_erc20copy = '0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C';

const drawerWidth = 240;

function ResponsiveDrawer() {
    const [page, setPage] = React.useState('Home');
    const [contract_avaperps, set_contract_avaperps] = React.useState();
    const [contract_erc20copy, set_contract_erc20copy] = React.useState();

    React.useEffect(() => {
        console.log(Web3);
        if (Web3.givenProvider === null) {
            return;
        }
        const web3 = new Web3(Web3.givenProvider);
        let resp;

        resp = new web3.eth.Contract(abi_avaperps, address_avaperps);
        set_contract_avaperps(resp);
        
        resp = new web3.eth.Contract(abi_erc20copy, address_erc20copy);
        set_contract_erc20copy(resp);
    }, []);

    console.log(page);

    return (
        <Box
            sx={{ display: 'flex' }}
        >
            <CssBaseline />
            <AppBar
                position="fixed"
                style={{
                    color: 'fireBrick',
                    background: 'black'
                }}
            >
                <Toolbar>
                    
                    <Box mr={2}>
                        <img src={logo} alt="logo" height="55px" />
                    </Box>

                    <Typography
                        variant="h4" noWrap component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Yin Finance
                    </Typography>

                    <DepositButton
                        contract_erc20copy={contract_erc20copy}
                        contract_avaperps={contract_avaperps}
                    />

                    <Login
                        setPage={setPage}
                    />
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Trade
                    contract_erc20copy={contract_erc20copy}
                    contract_avaperps={contract_avaperps}
                    page={page}
                />
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
