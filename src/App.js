import React from "react";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useMoralis } from "react-moralis";
import Web3 from 'web3';

import Trade from './pages/Trade/App';
import Home from './pages/Home/Home';

import DepositButton from './pages/TopBar/DepositButton';
import Login from './pages/TopBar/Login';

import logo from './static/logo.svg';

import abi_avaperps from './contracts/abi_avaperps.json';
import abi_erc20copy from './contracts/abi_erc20copy.json';

const address_avaperps = '0xAe23435Ab0edcaD26A097Fd1ebD6c4E5b49392A7';
const address_erc20copy = '0x8dC460712519ab2Ed3028F0cff0D044c5EC0Df0C';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const { user } = useMoralis();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [page, setPage] = React.useState('Home');
    const [contract_avaperps, set_contract_avaperps] = React.useState();
    const [contract_erc20copy, set_contract_erc20copy] = React.useState();

    React.useEffect(() => {
        console.log(Web3);
        if (Web3.givenProvider === null) {
            return;
        }
        const web3 = new Web3(Web3.givenProvider);
        let resp;

        resp = new web3.eth.Contract(abi_avaperps, address_avaperps);
        set_contract_avaperps(resp);
        
        resp = new web3.eth.Contract(abi_erc20copy, address_erc20copy);
        set_contract_erc20copy(resp);
    }, []);

    const pages = {
        Home: <Home />,
        Trade: <Trade
            contract_erc20copy={contract_erc20copy}
            contract_avaperps={contract_avaperps}
        />,
    }

    console.log(page);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {Object.keys(pages).map((text, index) => (
                    <ListItem
                        button key={text}
                        onClick={event => setPage(text)}
                        disabled={text === 'Trade' && !user}
                    >
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                style={{
                    color: 'fireBrick',
                    // backgroundColor: 'black'
                }}
            >
                <Toolbar>
                    
                    <Box mr={2}>
                        <img src={logo} alt="logo" height="55px" />
                    </Box>

                    <Typography
                        variant="h4" noWrap component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Yin Finance
                    </Typography>

                    <DepositButton
                        contract_erc20copy={contract_erc20copy}
                        contract_avaperps={contract_avaperps}
                    />

                    <Login
                        setPage={setPage}
                    />
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Trade
                    contract_erc20copy={contract_erc20copy}
                    contract_avaperps={contract_avaperps}
                    page={page}
                />
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
