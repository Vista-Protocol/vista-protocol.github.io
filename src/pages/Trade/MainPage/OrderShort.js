import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, TextField, AppBar, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.primary,
}));

const cap = 5;
const peg_multiplier = 10 ** 6;

export default function OrderShort({ state, contract_avaperps, short = false }) {
    const [amount, setAmount] = React.useState(0);
    const { user } = useMoralis();

    const {
        amm_base, amm_quote, user_base, user_quote, user_collateral, avax_price
    } = state;

    const perp_price = amm_quote / amm_base;
    const k = amm_quote * amm_base;

    function open_short_base_amount() {
        const quote1 = Number(amm_quote) - amount * peg_multiplier;
        const base1 = k / quote1;
        const base = amm_base - base1;
        return Math.abs(
            base / peg_multiplier
        ).toFixed(2);
    }

    function close_short_base_amount() {
        const quote1 = Number(amm_quote) + amount * peg_multiplier;
        const base1 = k / quote1;
        const base = amm_base - base1;
        return Math.abs(
            base / peg_multiplier
        ).toFixed(2);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    type='number'
                    variant='standard'
                    inputProps={{ style: { fontSize: 30 } }}

                    value={amount}
                    onChange={event => setAmount(event.target.value)}
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
                            amount / perp_price
                        ).toFixed(2)
                    } (EST.)
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Item>
                    AVAX-PERP
                </Item>

                <Typography
                    variant='body2'
                >
                    Max Size: {
                        (
                            user_quote / perp_price / peg_multiplier
                        ).toFixed(2)
                    }
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                    variant='body2'
                    style={{ textAlign: 'left' }}
                >
                    1 AVAX-PERP = {perp_price.toFixed(2)} USDC
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Button
                    variant='contained'
                    style={{ width: '100%' }}
                    disabled={!user || amount <= 0}
                    onClick={async () => {
                        const from = user.get('ethAddress');
                        await contract_avaperps.methods.open_short(
                            amount * peg_multiplier
                        ).send({ from });
                    }}
                >
                    Open Short: {open_short_base_amount()} AVAX-PERP
                </Button>
            </Grid>

            <Grid item xs={6}>
                <Button
                    variant='contained'
                    style={{ width: '100%' }}
                    disabled={!user || amount <= 0}
                    onClick={async () => {
                        const from = user.get('ethAddress');
                        await contract_avaperps.methods.close_short(
                            amount * peg_multiplier
                        ).send({ from });
                    }}
                >
                    Close Short: {close_short_base_amount()} AVAX-PERP
                </Button>
            </Grid>
        </Grid>
    );
}
