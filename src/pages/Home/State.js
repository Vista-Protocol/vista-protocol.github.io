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
                    quote_asset_amount (TVL)
                </Typography>
                <Typography variant="h5" component="div">
                    9
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    base_asset_amount
                </Typography>
                <Typography variant="h5" component="div">
                    999
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    k
                </Typography>
                <Typography variant="h5" component="div">
                    999
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    mark_price
                </Typography>
                <Typography variant="h5" component="div">
                    999
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    oracle_price
                </Typography>
                <Typography variant="h5" component="div">
                    999
                </Typography>
            </CardContent>
        </Card>
    );
}
