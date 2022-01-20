import * as React from 'react';
import { Typography } from '@mui/material';

const text = `The Avalanche-10 is an equally-weighted index of the top 10 tokens on Avalanche by market capitalization, excluding stablecoins. Included tokens and amounts can be found in 'Prospectus', below. Interested investors can gain exposure to the index by buying Avalanche-10 tokens (ATEN) on the homepage. This project is currently on the Avalanche testnet. 
`;

export default function Prompt() {
    return (
        <Typography
            sx={{ whiteSpace: 'pre-line'}}
        >
            {text}
        </Typography>
    );
}
