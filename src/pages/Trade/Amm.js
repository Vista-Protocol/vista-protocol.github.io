import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ ammState }) {
    const content = Object.entries(ammState).map( ([ key, value ]) => (
        <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {key}
            </Typography>
            <Typography variant="h5" component="div">
                {value / 10 ** 6}
            </Typography>
        </div>
    ));

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Virtual AMM State
                </Typography>

                {content}
            </CardContent>
        </Card>
    );
}
