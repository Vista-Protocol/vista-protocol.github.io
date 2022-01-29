import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Toolbar, Grid, Paper } from '@mui/material';

import axios from 'axios';

import Web3 from "web3";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

// import TopBar from './TopBar/TopBar.js'

import LabTabs from './MainPage/LabTabs.js';
import YourData from './MainPage/YourData.js';
import Loading from './Loading';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const cap = 5;

export default function App({ contract_avaperps, contract_erc20copy, net_id, address_avaperps, children, perp_name }) {
    const { user } = useMoralis();

    const [state, setState] = React.useState();

    async function get_avax_price() {
        let from = false;
        if (user) {
            // console.log('user not logged in');
            from = user.get('ethAddress');
        }

        if (!contract_avaperps) {
            console.log('contract not initialized');
            return;
        }

        const url = 'https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=AVAX&key=ckey_a1450a78fcfc4d27aa954670c11';

        const promises = [
            contract_avaperps.methods.amm_base().call(),
            contract_avaperps.methods.amm_quote().call(),
            user ? contract_avaperps.methods.user_base().call({ from }) : 'Not logged in',
            user ? contract_avaperps.methods.user_quote().call({ from }) : 'Not logged in',
            user ? contract_avaperps.methods.user_collateral().call({ from }) : 'Not logged in',
            axios.get(url),
            contract_erc20copy ? contract_erc20copy.methods.balanceOf(address_avaperps).call() : 'n',
        ];

        const values = await Promise.all(promises);
        // console.log(values)
        let [
            amm_base, amm_quote, user_base, user_quote, user_collateral, resp, tvl
        ] = values;

        const avax_price = resp.data.data.items[0].quote_rate;

        const obj = {
            amm_base, amm_quote, user_base, user_quote, user_collateral, avax_price, tvl, perp_name
        };

        setState(obj);
    }

    React.useEffect(() => {
        get_avax_price();
    }, [perp_name, user]);

    if (net_id !== 43113) {
        return (
            <Loading
                message={`Wrong network (${net_id}). Should be Avalanche (43113).`}
            />
        );
    }

    if (!state) {
        get_avax_price();
        return <Loading />;
    }

    return (
        <Box
            style={{
                background: 'linear-gradient(black, fireBrick)',
                height: '100vh'
            }}
            p={3}
        >
            <Grid
                container
                justifyContent="center"
            >
                <Item>
                    <LabTabs
                        state={state}
                        contract_avaperps={contract_avaperps}
                    >
                        {children}
                    </LabTabs>
                </Item>
            </Grid>
            <br />

            <Grid
                container
                justifyContent="center"
                // style={{ width: '100%' }}
                sx={{ borderRadius: '16px' }}
            >
                <Item>
                    <YourData
                        state={state}
                    />
                </Item>
            </Grid>
        </Box>
    );
}
