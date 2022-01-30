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
import Login from './Login';
import logo from '../../static/logo.svg';

export default function TopBar({ contract_avaperps, contract_erc20copy }) {
    return (
        <AppBar
            position="fixed"
            style={{
                color: 'fireBrick',
                background: 'transparent'
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
    )
}