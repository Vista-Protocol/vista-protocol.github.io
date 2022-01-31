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

import DepositButton from './DepositButton';
import FaucetButton from './FaucetButton';
import Login from './Login';
import logo from '../../static/VistaRedLogo.png';
const peg_multiplier = 10 ** 8;

export default function TopBar({ contract_avaperps, contract_erc20copy, address_avaperps, address_erc20copy }) {
    const { user } = useMoralis();
    const [available, setAvailable] = React.useState(-1);
    
    let from;
    if (user) {
        from = user.get('ethAddress');
    }

    const getAvailable = async () => {
        const resp = await contract_erc20copy.methods.allowance(from, address_avaperps).call();
        setAvailable(
            resp / peg_multiplier
        );
    }

    if (available < 0) {
        getAvailable();
    }

    console.log(available)

    return (
        <AppBar
            position="fixed"
            style={{
                color: 'fireBrick',
                background: 'transparent'
            }}
        >
            <Toolbar>
                
                <Box m={2}>
                    <img src={logo} alt="logo" height="55px" />
                </Box>

                <Typography
                    variant="h4" noWrap component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Vista Protocol
                </Typography>

                <FaucetButton
                    contract_erc20copy={contract_erc20copy}
                    contract_avaperps={contract_avaperps}
                    address_avaperps={address_avaperps}
                />

                <DepositButton
                    contract_erc20copy={contract_erc20copy}
                    contract_avaperps={contract_avaperps}
                    available={available}
                    address_avaperps={address_avaperps}
                    address_erc20copy={address_erc20copy}
                />

                <Login />
                
            </Toolbar>
        </AppBar>
    )
}