import React from "react";
import { useMoralis } from "react-moralis";
import { Button, Avatar } from '@mui/material';

const moralisIcon = 'https://moralis.io/wp-content/uploads/2021/06/cropped-Moralis-Favicon-Glass.png';
const metamaskIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png';

const Login = () => {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();

    if (!isAuthenticated) {
        return (
            <div>
                <Button
                    onClick={() => authenticate({ signingMessage: "Hello World!" })}
                    color='inherit'
                    startIcon={<Avatar
                        src={moralisIcon}
                    />}
                >
                    Login
                </Button>
            </div>
        );
    }

    // console.log(user.get('ethAddress'));

    return (
        <div>
            <Button
                onClick={() => logout()}
                color='inherit'
                startIcon={<Avatar
                    src={metamaskIcon}
                />}
            >
                Logout
            </Button>
        </div>
    );
};

export default Login;
