import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import { Info } from '@mui/icons-material';
import DataTable from './DataTable';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ composition }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton variant="outlined" onClick={handleClickOpen}>
                <Info />
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Avalanche INDEX Description
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom
                        style={{ whiteSpace: "pre-wrap" }}
                    >
                        The INDEX token derives its price from the Avalanche network's top 10 projects by market cap, excluding stablecoins.
                        INDEX was established on 2022-01-19T07:50:00.000Z at 1 USDC per token, containing LINK, REN, AMPL, ORN, AVAX, ALEPH, SWAP, ANY, SUSHI, and REEF.
                        If one of INDEX's component tokens drops out of the top 10, it can be replaced, as demonstrated below with the button,
                        though in production a DAO vote will be needed.
                        INDEX's price is updated every 5 minutes, with automatic rebalancing if a single component exceeds 20% weight.
                    </Typography>

                    <DataTable
                        composition={composition}
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
