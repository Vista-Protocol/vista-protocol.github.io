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

export default function OrderShort({ state, contract_avaperps, amount }) {
    const { user } = useMoralis();

    const {
        perp, amm_base, amm_quote, user_base, user_quote, user_collateral, avax_price, perp_name, peg_multiplier
    } = state;

    const perp_price = amm_quote / amm_base;
    const k = amm_quote * amm_base;
    
    const disabled = !user || amount <= 0 || amount * peg_multiplier > user_quote;

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
                <Button
                    variant='contained'
                    style={{ width: '100%' }}
                    disabled={disabled}
                    onClick={async () => {
                        const from = user.get('ethAddress');
                        await contract_avaperps.methods.open_short(
                            perp, amount * peg_multiplier
                        ).send({ from });

                        window.location.reload();

                    }}
                >
                    Open Short: {open_short_base_amount()} {perp_name}-PERP
                </Button>
            </Grid>

            <Grid item xs={6}>
                <Button
                    variant='contained'
                    style={{ width: '100%' }}
                    disabled={disabled}
                    onClick={async () => {
                        const from = user.get('ethAddress');
                        await contract_avaperps.methods.close_short(
                            perp, amount * peg_multiplier
                        ).send({ from });

                        window.location.reload();

                    }}
                >
                    Close Short: {close_short_base_amount()} {perp_name}-PERP
                </Button>
            </Grid>
        </Grid>
    );
}
