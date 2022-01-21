import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ position }) {

    const { quote, base } = position;

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Virtual AMM State
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Quote Asset Amount (USDT)
                </Typography>
                <Typography variant="h5" component="div">
                    {quote / 10 ** 6}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Base Asset Amount (ATEN)
                </Typography>
                <Typography variant="h5" component="div">
                    {base / 10 ** 6}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    k
                </Typography>
                <Typography variant="h5" component="div">
                    {quote * base / 10 ** 12}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Mark Price (USDT)
                </Typography>
                <Typography variant="h5" component="div">
                    {quote / base}
                </Typography>
            </CardContent>
        </Card>
    );
}
