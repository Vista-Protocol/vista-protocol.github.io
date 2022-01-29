import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function SelectTextFields({ perp, set_perp, perps }) {
    const handleChange = (event) => {
        set_perp(event.target.value);
    };

    const currencies = perps.map( (label, value) => ({ label, value }) );

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
