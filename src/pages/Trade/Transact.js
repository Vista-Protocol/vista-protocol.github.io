import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ name, text, color, func, position }) {
    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState(0);

    const multiple = 10 ** 6;

    function buyPrice() {
        const { base, quote } = position;
        const k = base * quote;

        const base1 = base - amount * multiple;
        const quote1 = k / base1;
        const amount_usdt = quote1 - quote;
        return amount_usdt / multiple;
    }

    if (name === 'Buy') {
        text = `${buyPrice()} USDT needed to buy ${amount} ATEN`;
    }

    function sellPrice() {
        const { base, quote } = position;
        const k = base * quote;

        const base1 = parseInt(base) + amount * multiple;
        const quote1 = k / base1;
        const amount_usdt = quote - quote1;
        return amount_usdt / multiple;
    }

    if (name === 'Sell') {
        text = `${sellPrice()} USDT recievable from selling ${amount} ATEN`;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                color={color}
            >
                {name}
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {name}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        {text}
                    </DialogContentText>

                    <TextField
                        label="Amount"
                        type="number"
                        variant="standard"

                        value={amount}
                        onChange={event => {
                            const value = event.target.value;
                            if (value > 0) {
                                setAmount(value);
                            }}
                        }
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button onClick={() => {
                        func(amount)
                        handleClose();
                    }}>
                        {name}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
