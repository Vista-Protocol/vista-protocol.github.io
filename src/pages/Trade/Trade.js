import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Toolbar, Grid, Paper } from '@mui/material';

import axios from 'axios';

import Web3 from "web3";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

// import TopBar from './TopBar/TopBar.js'

import LabTabs from './Order/LabTabs.js';
import YourData from './YourData/YourData.js';
import Loading from './Loading';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const cap = 5;
const peg_multiplier = 10 ** 8;

export default function App({ contract_avaperps, contract_erc20copy, net_id, address_avaperps, children, perp_name, perp }) {
    const { user } = useMoralis();

    const [state, setState] = React.useState();

    async function get_avax_price() {
        let from = false;
        if (user) {
            console.log('user not logged in');
            from = user.get('ethAddress');
        }

        if (contract_avaperps == null) {
            console.log('contract not initialized');
            return;
        }

        const promises = [
            contract_avaperps.methods.amms(perp).call(),
            from ? contract_avaperps.methods.user_base(perp).call({ from }) : 'Not logged in',
            from ? contract_avaperps.methods.user_quote().call({ from }) : 'Not logged in',
            from ? contract_avaperps.methods.user_collateral().call({ from }) : 'Not logged in',
            contract_avaperps.methods.oracle_price(perp).call(),
            contract_erc20copy.methods.balanceOf(address_avaperps).call(),
        ];

        const values = await Promise.all(promises);
        // console.log(values)
        let [
            amm, user_base, user_quote, user_collateral, oracle_price, tvl
        ] = values;

        const amm_base = amm.base_asset_amount;
        const amm_quote = amm.quote_asset_amount;

        const obj = {
            amm_base, amm_quote, user_base, user_quote, user_collateral, oracle_price, tvl, perp_name, peg_multiplier, perp
        };

        setState(obj);
    }

    React.useEffect(() => {
        get_avax_price();
    }, [
        user, perp
    ]);

    if (net_id !== 43113) {
        return (
            <Loading
                message={`Wrong network. Should be Avalanche Fuji Testnet (Network ID 43113).`}
            />
        );
    }

    if (!state) {
        get_avax_price();
        return <Loading />;
    }

    return (
        <Box
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
