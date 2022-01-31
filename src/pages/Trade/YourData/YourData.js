import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Divider } from '@mui/material';

import TimeComponent from './TimeComponent';
import IndexInfo from './../../IndexInfo/IndexInfo';

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
        amm_base, amm_quote, user_base, user_quote, user_collateral, oracle_price, tvl, perp_name, peg_multiplier, perp
    } = state;

    const mark_price = amm_quote / amm_base;
    const portfolio_value = (
        (
            mark_price * Math.abs(user_base) + Number(user_quote)
         ) / cap / peg_multiplier
    ).toFixed(2);

    const funding_rate = (mark_price * peg_multiplier - oracle_price) / oracle_price / 24;
    const apy = Math.pow(1 + funding_rate, 24 * 365) - 1;

    const position = `
        ${
            (Math.abs(user_base) / peg_multiplier).toFixed(2)
        }
        ${user_base < 0 ? 'SHORT' : 'LONG'}
        ${perp_name}-PERP
    `;

    return (
        <Box m={2}>

            <Grid container spacing={2}>

                <Grid container item spacing={2} columns={11}>
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

                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            Position
                        </Typography>
                    </GridItem>
                
                    <GridItem>
                        {
                            (Math.abs(user_base) * mark_price / peg_multiplier).toFixed(2)
                        } USDC
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            Position Notional Value
                        </Typography>
                    </GridItem>
                
                    <GridItem>
                        {
                            (user_quote / peg_multiplier / cap).toFixed(2)
                        } USDC
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            Liquid Capital
                        </Typography>
                    </GridItem>
                
                    <GridItem>
                        0 USDC
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            Liquidation Price
                        </Typography>
                    </GridItem>
                </Grid>
                
                <Grid container item spacing={2} columns={11}>
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
                            (mark_price).toFixed(2)
                        } USDC
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            {perp_name}-PERP Price
                        </Typography>
                    </GridItem>
                
                    <GridItem>
                        {
                            (oracle_price / peg_multiplier).toFixed(2)
                        } USDC
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            {perp_name} Price
                        </Typography>
                    </GridItem>
                
                    <GridItem>
                        {
                            (funding_rate * 100).toFixed(2)
                        }% in <TimeComponent />
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
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
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            24h Avg Funding
                        </Typography>
                    </GridItem>
                </Grid>
                
                <Grid container item spacing={2} columns={11}>
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
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            TVL
                        </Typography>
                    </GridItem>
                
                    <GridItem>
                        {
                            (
                                amm_base / peg_multiplier
                            ).toFixed(2)
                        } {perp_name}-PERP
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            Base Asset Amount
                        </Typography>
                    </GridItem>
                
                    <GridItem>
                        {
                            (
                                amm_quote / peg_multiplier
                            ).toFixed(2)
                        } USDC
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            Quote Asset Amount
                        </Typography>
                    </GridItem>
                
                    <GridItem>
                        {
                            (
                                amm_quote * amm_base / peg_multiplier ** 2
                            ).toFixed(2)
                        }
                        
                        <Divider sx={{ borderBottomWidth: 2 }} />
                        
                        <Typography
                            variant='subtitle2'
                        >
                            k
                        </Typography>
                    </GridItem>
                </Grid>
            
            </Grid>
            
        </Box>
            
    );
}
