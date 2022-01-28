import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function SimpleBackdrop({ message = false }) {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const content = message ? (
        <Typography
            variant='h4'
        >
            {message}
        </Typography>
    ) : (
        <CircularProgress color="inherit" />
    );

    return (
        <div>
            {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                // onClick={handleClose}
            >
                {content}
            </Backdrop>
        </div>
    );
}
