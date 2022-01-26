import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack } from '@mui/material';

const peg_multiplier = 10 ** 6;
const cap = 5;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
//   color: theme.palette.common.white,
}));

function GridItem({ xs = 2, children }) {
    return (
        <Grid item xs={xs}>
            <Item>
                {children}
            </Item>
        </Grid>
    );
}

export default function BasicGrid({ state }) {
    const {
        avax_price, user_base, user_collateral, amm_base, amm_quote
    } = state;

    const position = `
        ${Math.abs(user_base) / peg_multiplier}
        ${user_base < 0 ? 'SHORT' : 'LONG'}
        AVAX-PERP
    `;

    return (
        <Box
            m={3}
            sx={{ flexGrow: 1 }}
        >
            <Grid container spacing={2} columns={11}>
                <GridItem
                    xs={3}
                >
                    <Typography
                        variant='h4'
                    >
                        Your Data
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {position}
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Position
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {
                        (
                            Math.abs(user_base) * avax_price / cap
                            + Number(user_collateral)
                        ) / peg_multiplier
                    } USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Portfolio Value
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {user_collateral / peg_multiplier} USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Deposited Capital
                    </Typography>
                </GridItem>
            
                <GridItem>
                    0 USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        AVAX Liquidation Price
                    </Typography>
                </GridItem>
            </Grid>
            
            <br />
            
            <Grid container spacing={2} columns={11}>
                <GridItem
                    xs={3}
                >
                    <Typography
                        variant='h4'
                    >
                        Market Data
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {amm_quote / amm_base} USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        AVAX-PERP Price
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {avax_price} USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        AVAX Price (Live from Covalent)
                    </Typography>
                </GridItem>
            
                <GridItem>
                    0% in 11:17
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Predicted Funding Rate
                    </Typography>
                </GridItem>
            
                <GridItem>
                    0% APY
                    
                    <Typography
                        variant='subtitle2'
                    >
                        24h Avg Funding
                    </Typography>
                </GridItem>
            </Grid>
        
            
            <br />
            
            <Grid container spacing={2} columns={11}>
                <GridItem
                    xs={3}
                >
                    <Typography
                        variant='h4'
                    >
                        vAMM Data
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {amm_base / peg_multiplier} AVAX-PERP
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Base Asset Amount
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {amm_quote / peg_multiplier} USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Quote Asset Amount
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {amm_quote * amm_base / peg_multiplier ** 2}
                    
                    <Typography
                        variant='subtitle2'
                    >
                        k
                    </Typography>
                </GridItem>
            </Grid>
        
        </Box>
    );
}
