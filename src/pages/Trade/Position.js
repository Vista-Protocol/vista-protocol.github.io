import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ position }) {
    const { balance, usdt, index } = position;

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Your Position
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Outside USDT Balance
                </Typography>
                <Typography variant="h5" component="div">
                    {balance}
                </Typography>
                
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Deposited USDT Balance
                </Typography>
                <Typography variant="h5" component="div">
                    {usdt}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    variant='contained'
                >
                    Deposit
                </Button>
                <Button
                    variant='contained'
                    color='error'
                >
                    Withdraw
                </Button>
            </CardActions>

            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Avalanche-10 (ATEN) Token Balance
                </Typography>
                <Typography variant="h5" component="div">
                    {index}
                </Typography>
                
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Notional Value
                </Typography>
                <Typography variant="h5" component="div">
                    9
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    variant='contained'
                >
                    Buy
                </Button>
                <Button
                    variant='contained'
                    color='error'
                >
                    Sell
                </Button>
            </CardActions>
        </Card>
    );
}
