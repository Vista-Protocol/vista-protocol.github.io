import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        label: 'AVAX-PERP',
        value: 0,
    },
    {
        label: 'AVATEN',
        value: 1,
    },
];

export default function SelectTextFields({ perp, set_perp }) {
    const handleChange = (event) => {
        set_perp(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                // '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-select-currency"
                select
                value={perp}
                onChange={handleChange}
                variant='standard'
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}
