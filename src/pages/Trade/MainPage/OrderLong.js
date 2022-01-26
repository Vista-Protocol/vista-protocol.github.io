import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, TextField, AppBar, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.primary,
}));

const cap = 5;
const peg_multiplier = 10 ** 6;

export default function LabTabs({ avax_price, user_collateral }) {
    const [amount, setAmount] = React.useState(0);

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography
                    variant='h4'
                >
                    {amount * avax_price}
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Item>
                    USDC
                </Item>

                <Typography
                    variant='body2'
                >
                    Borrowing Power: {user_collateral * cap / peg_multiplier}
                </Typography>
            </Grid>
            
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
                    AVAX-PERP
                </Item>

                <Typography
                    variant='body2'
                    >
                    Max Size: {user_collateral * cap / avax_price / peg_multiplier}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                    variant='body2'
                    style={{ textAlign: 'left' }}
                >
                    1 AVAX-PERP = {avax_price} USDC
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Button
                    variant='contained'
                    style={{ width: '100%' }}
                >
                    Open Long: {amount} AVAX-PERP
                </Button>
            </Grid>

            <Grid item xs={6}>
                <Button
                    variant='contained'
                    style={{ width: '100%' }}
                >
                    Close Long: {amount} AVAX-PERP
                </Button>
            </Grid>
        </Grid>
    );
}
