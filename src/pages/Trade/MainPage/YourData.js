import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack } from '@mui/material';

import TimeComponent from './TimeComponent';

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
        amm_base, amm_quote, user_base, user_quote, user_collateral, avax_price, tvl
    } = state;

    const perp_price = amm_quote / amm_base;
    const portfolio_value = (
        (
            perp_price * Math.abs(user_base) + Number(user_quote)
         ) / cap / peg_multiplier
    ).toFixed(2);

    const funding_rate = (perp_price - avax_price) / avax_price / 24;
    const apy = Math.pow(1 + funding_rate, 24 * 365) - 1;

    const position = `
        ${
            (Math.abs(user_base) / peg_multiplier).toFixed(2)
        }
        ${user_base < 0 ? 'SHORT' : 'LONG'}
        AVAX-PERP
    `;

    return (
        <Box
            m={1}
            p={1}
            sx={{
                flexGrow: 1,
            }}
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
                        (user_quote / peg_multiplier / cap).toFixed(2)
                    } USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Liquid Capital
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {
                        portfolio_value
                    } USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Portfolio Value
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
                    {
                        perp_price.toFixed(2)
                    } USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        AVAX-PERP Price
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {
                        avax_price.toFixed(2)
                    } USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        AVAX Price
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {
                        (funding_rate * 100).toFixed(2)
                    }% in <TimeComponent />
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Predicted Funding Rate
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {
                        apy.toFixed(2)
                    }% APY
                    
                    <Typography
                        variant='subtitle2'
                    >
                        24h Avg Funding
                    </Typography>
                </GridItem>
            </Grid>
        
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
                    {
                        (
                            tvl / peg_multiplier
                        ).toFixed(2)
                    } USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        TVL
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {
                        (
                            amm_quote / peg_multiplier
                        ).toFixed(2)
                    } USDC
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Quote Asset Amount
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {
                        (
                            amm_base / peg_multiplier
                        ).toFixed(2)
                    } AVAX-PERP
                    
                    <Typography
                        variant='subtitle2'
                    >
                        Base Asset Amount
                    </Typography>
                </GridItem>
            
                <GridItem>
                    {
                        (
                            amm_quote * amm_base / peg_multiplier ** 2
                        ).toFixed(2)
                    }
                    
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
