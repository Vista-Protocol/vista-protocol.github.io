import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { TextField, Alert } from '@mui/material';

function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    USDC Fuji Testnet Faucet
                </Typography>

                <TextField
                    label="Your Address"
                    variant="outlined"
                />

                <br />
                <br />

                <Alert severity="error">
                    This is a beta faucet. Funds are not real.
                </Alert>

            </CardContent>
            <CardActions>
                <Button
                    variant='contained'
                >
                    Request 1000 USDC
                </Button>
            </CardActions>
        </Card>
    );
}

export default function Wrapper() {
    
}
