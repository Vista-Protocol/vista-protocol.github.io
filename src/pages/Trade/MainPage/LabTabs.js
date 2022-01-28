import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import OrderLong from './OrderLong';
import OrderShort from './OrderShort';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function LabTabs({ state, contract_avaperps }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    console.log('labtabs')

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        console.log(index)
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    // indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Long" {...a11yProps(0)} />
                    <Tab label="Short" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <OrderLong
                        contract_avaperps={contract_avaperps}
                        state={state}
                    />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <OrderShort
                        contract_avaperps={contract_avaperps}
                        state={state}
                    />
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
