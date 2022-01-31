import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, TextField, AppBar, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

import ShortButtons from './ShortButtons';
import LongButtons from './LongButtons';
import IndexInfo from './../../IndexInfo/IndexInfo';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.primary,
}));

const cap = 5;

export default function OrderShort({ state, contract_avaperps, value, children }) {
    const [amount, setAmount] = React.useState(0);
    const { user } = useMoralis();

    const {
        amm_base, amm_quote, user_base, user_quote, user_collateral, avax_price, peg_multiplier, perp
    } = state;

    const [composition, set_composition] = React.useState();

    const get_composition = async () => {
        const comp = await contract_avaperps.methods.composition().call();
        set_composition(comp);
    }

    if (composition == null) {
        get_composition();
    }

    console.log(composition);

    const info = perp ? <div /> : (
        <IndexInfo
            composition={composition}
        />
    );

    const mark_price = amm_quote / amm_base;
    
    const buttons = value ? (
        <ShortButtons
            amount={amount}
            contract_avaperps={contract_avaperps}
            state={state}
        />
    ) : (
        <LongButtons
            amount={amount}
            contract_avaperps={contract_avaperps}
            state={state}
        />
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    type='number'
                    variant='standard'
                    inputProps={{ style: { fontSize: 30 } }}

                    value={amount}
                    onChange={event => {
                        setAmount(event.target.value);
                    }}
                />
            </Grid>

            <Grid item xs={6}>
                <Item>
                    USDC
                </Item>

                <Typography
                    variant='body2'
                >
                    Borrowing Power: {
                        (user_quote / peg_multiplier).toFixed(2)
                    }
                </Typography>
            </Grid>
            
            <Grid item xs={6}>
                <Typography
                    variant='h4'
                >
                    {
                        (
                            amount / mark_price
                        ).toFixed(2)
                    } (EST.)
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Item>
                    {children}
                </Item>

                <Typography
                    variant='body2'
                >
                    Max Size: {
                        (
                            user_quote / mark_price / peg_multiplier
                        ).toFixed(2)
                    }
                    
                    {info}
                </Typography>
            </Grid>

            <Box mt={2}>
                {buttons}
            </Box>

        </Grid>
    );
}
