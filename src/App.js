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

import Trade from './pages/Trade/App';
import DepositButton from './pages/TopBar/DepositButton';
import Login from './pages/TopBar/Login';
import logo from './static/logo.svg';
import SelectPerp from './SelectPerp';

import abi_avaperps from './contracts/abi_avaperps.json';
import abi_avaindex from './contracts/abi_avaindex.json';
import abi_erc20copy from './contracts/abi_erc20copy.json';

const address_avaindex = '0x92E8D075eadB70323269b4aB45eFE5956b8d01B9';
const address_avaperps = '0xAe23435Ab0edcaD26A097Fd1ebD6c4E5b49392A7';
const address_erc20copy = '0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C';

const drawerWidth = 240;

function ResponsiveDrawer() {
    const { user } = useMoralis();
    const [contract_avaperps, set_contract_avaperps] = React.useState();
    const [contract_erc20copy, set_contract_erc20copy] = React.useState();
    const [net_id, set_net_id] = React.useState();
    const [perp, set_perp] = React.useState(1);

    const get_net_id = async () => {
        console.log(Web3);
        if (Web3.givenProvider === null) {
            return;
        }
        const web3 = new Web3(Web3.givenProvider);

        const id = await web3.eth.net.getId();
        set_net_id(id);

        let resp;

        resp = perp ? new web3.eth.Contract(abi_avaindex, address_avaindex)
            : new web3.eth.Contract(abi_avaperps, address_avaperps);
        set_contract_avaperps(resp);
        
        resp = new web3.eth.Contract(abi_erc20copy, address_erc20copy);
        set_contract_erc20copy(resp);
    }

    React.useEffect(() => {
        get_net_id();
    }, []);

    const children = (
        <SelectPerp
            perp={perp}
            set_perp={set_perp}
        />
    );

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

                    <Login />
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
                    net_id={net_id}
                    address_avaperps={address_avaperps}
                >
                    <SelectPerp
                        perp={perp}
                        set_perp={set_perp}
                    />
                </Trade>
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
