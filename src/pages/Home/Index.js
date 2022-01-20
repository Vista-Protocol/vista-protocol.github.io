import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Avalanche-10 (ATEN) Token Balance
                </Typography>
                <Typography variant="h5" component="div">
                    9
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Outside USDT Balance
                </Typography>
                <Typography variant="h5" component="div">
                    999
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
