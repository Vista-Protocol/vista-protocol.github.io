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

const price = 76.65;
const collateral = 6500;

export default function LabTabs() {
    const [amount, setAmount] = React.useState(0);

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography
                    variant='h4'
                >
                    {amount * price}
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Item>
                    USDC
                </Item>

                <Typography
                    variant='body2'
                    >
                    Max Size: {collateral}
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
                    Max Size: {collateral / price}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                    variant='body2'
                    style={{ textAlign: 'left' }}
                >
                    1 AVAX-PERP = {price} USDC
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Button
                    variant='contained'
                    style={{ width: '100%' }} 
                    InputProps={{
                        inputProps: {
                            style: { textAlign: "center" },
                        }
                    }}
                >
                    Open Short: {amount} AVAX-PERP
                </Button>
            </Grid>

            <Grid item xs={6}>
                <Button
                    variant='contained'
                    style={{ width: '100%' }} 
                    InputProps={{
                        inputProps: {
                            style: { textAlign: "center" },
                        }
                    }}
                >
                    Close Short: {amount} AVAX-PERP
                </Button>
            </Grid>
        </Grid>
    );
}
