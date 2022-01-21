import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useMoralis } from "react-moralis";

import Transact from './Transact';

export default function BasicCard({ position, contract }) {
    const { user } = useMoralis();
    const { balance, usdt, index, quote, base } = position;

    const from = user.get('ethAddress');
    const admin = '0xc59E499d8E789986A08547ae5294D14C5dd91D9f';

    async function deposit(amount) {
        await contract.methods.deposit_usdt(amount * 10 ** 6).send({ from });
    }

    async function withdraw(amount) {
        await contract.methods.withdraw_usdt(from, amount * 10 ** 6).send({ from: admin });
    }

    async function buy(amount) {
        await contract.methods.buy_index(amount * 10 ** 6).send({ from });
    }

    async function sell(amount) {
        await contract.methods.sell_index(amount * 10 ** 6).send({ from });
    }

    return (
        <Card sx={{ minWidth: 275 }}>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Your Position
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Outside USDT Balance
                </Typography>
                <Typography variant="h5" component="div">
                    {balance / 10 ** 6}
                </Typography>
                
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Deposited USDT Balance
                </Typography>
                <Typography variant="h5" component="div">
                    {usdt / 10 ** 6}
                </Typography>
            </CardContent>

            <CardActions>
                <Transact
                    name='Deposit'
                    text='Escrowed USDT can be used to buy ATEN. Depositing does not constitute buying ATEN.'
                    func={deposit}
                />

                <Transact
                    name='Withdraw'
                    text='Transfer USDT out of escrow. Withdrawn USDT can be used outside this contract like normal.'
                    color='error'
                    func={withdraw}
                />
            </CardActions>

            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Avalanche-10 (ATEN) Token Balance
                </Typography>
                <Typography variant="h5" component="div">
                    {index / 10 ** 6}
                </Typography>
                
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Notional Value (USDT)
                </Typography>
                <Typography variant="h5" component="div">
                    {index / 10 ** 6 * quote / base}
                </Typography>
            </CardContent>

            <CardActions>
                <Transact
                    name='Buy'
                    func={buy}
                    position={position}
                />
                
                <Transact
                    name='Sell'
                    color='error'
                    func={sell}
                    position={position}
                />
            </CardActions>
        </Card>
    );
}
