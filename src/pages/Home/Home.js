import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Usdt from './Usdt';
import Index from './Index';
import State from './State';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function DirectionStack() {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Usdt />
                <Index />
                <State />
            </Stack>
        </div>
    );
}
