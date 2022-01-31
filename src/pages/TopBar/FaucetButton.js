import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Button, Avatar, Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

import Web3 from "web3";
import { useMoralis } from "react-moralis";

const peg_multiplier = 10 ** 8;
const usdcLogo = 'https://cdn-icons-png.flaticon.com/512/590/590415.png';

export default function FormDialog({ contract_avaperps, contract_erc20copy, address_avaperps }) {
    const { user } = useMoralis();

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [amount, setAmount] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    let from;
    if (user) {
        from = user.get('ethAddress');
    }

    async function mint() {
        setLoading(true);

        await contract_erc20copy.methods.mint(
            1000 * peg_multiplier
        ).send({ from });

        await contract_erc20copy.methods.increaseAllowance(
            address_avaperps, 1000 * peg_multiplier
        ).send({ from });

        window.location.reload();
    }

    return (
        <Box m={1}>
            <Button
                color='inherit'
                onClick={handleClickOpen}
                // style={{ backgroundColor: 'darkSlateGray' }}
                startIcon={<Avatar
                    src={usdcLogo}
                />}
                disabled={!user}
            >
                Use Faucet
            </Button>

            <Dialog open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    Use Faucet
                    
                    <IconButton
                        aria-label="close"
                        onClick={loading ? handleClickOpen : handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        USDC Faucet on Avalanche Fuji Testnet. Entails two transactions: minting test USDC and enabling you to deposit it.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        variant='contained'
                        onClick={mint}
                    >
                        Request 1000 USDC
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
