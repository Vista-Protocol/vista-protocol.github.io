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

export default function App({ contract_avaperps, contract_erc20copy }) {
    const { user } = useMoralis();
    // const { token, native } = useMoralisWeb3Api();

    const [avax_price, set_avax_price] = React.useState();

    const [amm_base, set_amm_base] = React.useState();
    const [amm_quote, set_amm_quote] = React.useState();

    const [user_base, set_user_base] = React.useState();
    const [user_collateral, set_user_collateral] = React.useState();

    const [state, setState] = React.useState();

    async function get_avax_price() {
        if (!user) {
            console.log('user not logged in');
            return;
        }
        const from = user.get('ethAddress');

        if (!contract_avaperps) {
            console.log('contract not initialized');
            return;
        }

        const url = 'https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&tickers=AVAX&key=ckey_a1450a78fcfc4d27aa954670c11';

        const promises = [
            contract_avaperps.methods.get_amm_base().call(),
            contract_avaperps.methods.get_amm_quote().call(),
            contract_avaperps.methods.get_user_base().call(),
            contract_avaperps.methods.get_user_collateral().call(),
            axios.get(url),
        ];

        const values = await Promise.all(promises);
        let [
            amm_base, amm_quote, user_base, user_collateral, resp
        ] = values;

        const avax_price = resp.data.data.items[0].quote_rate;

        const obj = {
            amm_base, amm_quote, user_base, user_collateral, avax_price
        };

        setState(obj);
        console.log(state);

        return obj;

        resp = await contract_avaperps.methods.get_amm_base().call();
        set_amm_base(resp);

        resp = await contract_avaperps.methods.get_amm_quote().call();
        set_amm_quote(resp);

        resp = await contract_avaperps.methods.get_user_base().call({ from });
        set_user_base(resp);

        resp = await contract_avaperps.methods.get_user_collateral().call({ from });
        set_user_collateral(resp);

        resp = await axios.get(url);
        set_avax_price(
            resp.data.data.items[0].quote_rate
        );

        return;
    }

    React.useEffect(() => {
        get_avax_price();
    }, []);

    if (!state) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <Box
        >
            {/* <TopBar
                contract_avaperps={contract_avaperps}
                contract_erc20copy={contract_erc20copy}
                user_collateral={user_collateral}
            /> */}
            <Toolbar />
            {/* <br /> */}

            <Grid
                container
                justifyContent="center"
            >
                <Item>
                    <LabTabs
                        state={state}
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
