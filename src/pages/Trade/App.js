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

export default function App({ contract_avaperps, contract_erc20copy, page }) {
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
        ];

        const values = await Promise.all(promises);
        // console.log(values)
        let [
            amm_base, amm_quote, user_base, user_quote, user_collateral, resp
        ] = values;

        const avax_price = resp.data.data.items[0].quote_rate;

        const obj = {
            amm_base, amm_quote, user_base, user_quote, user_collateral, avax_price
        };

        setState(obj);
        console.log(state);

        return obj;
    }

    React.useEffect(() => {
        get_avax_price();
    }, []);

    console.log('trade')

    if (!state) {
        get_avax_price();
        return <Loading />
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <Box
            style={{ background: 'linear-gradient(black, fireBrick)' }}
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
                    />
                </Item>
            </Grid>
            <br />

            <Grid
                container
                justifyContent="center"
                // style={{ width: '100%' }}
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
