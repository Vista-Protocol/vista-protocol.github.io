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

const address_avaperps = '0xF1c79edE62cD228aE637464810CCD12C30ad1A65';
const address_erc20copy = '0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C';

const peg_multiplier = 10 ** 8;
const usdcLogo = 'https://icons-for-free.com/iconfiles/png/512/cryptocurrency+icons+++color+usdc-1324449146826221536.png';

export default function FormDialog({ contract_avaperps, contract_erc20copy }) {
    const { user } = useMoralis();

    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState();
    const [available, setAvailable] = React.useState(-1);

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

    const getAvailable = async () => {
        const resp = await contract_erc20copy.methods.balanceOf(from).call();
        console.log(resp)
        setAvailable(
            resp / peg_multiplier
        );
    }

    React.useEffect(() => {
        while (available < 0) {
            getAvailable();
        }        
    }, []);

    console.log(available)

    async function deposit_collateral() {
        await contract_erc20copy.methods.approve(
            address_avaperps, amount * peg_multiplier
        ).send({ from });

        await contract_avaperps.methods.deposit_collateral(
            amount * peg_multiplier
        ).send({ from });

        handleClose();
    }

    async function withdraw_collateral() {
        await contract_avaperps.methods.withdraw_collateral(
            amount * peg_multiplier
        ).send({ from });

        handleClose();
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
                Transfer
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    Transfer
                    
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
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
                        Transfer USDC to and from this trading platform.
                    </DialogContentText>

                    <TextField
                        margin="dense"
                        label="Amount (USDC)"
                        // fullWidth
                        variant="standard"
                        type='number'
                        helperText={available.toFixed(2) + ' USDC available'}

                        value={amount}
                        onChange={event => {
                            const value = event.target.value;
                            if (value > 0 && value <= available) {
                                setAmount(value);
                            }
                        }}
                    />
                </DialogContent>

                <DialogActions>
                    <Button
                        variant='contained'
                        onClick={deposit_collateral}
                    >
                        Deposit
                    </Button>
                    <Button
                        onClick={withdraw_collateral}
                        variant='contained'
                        color='error'
                    >
                        Withdraw
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
