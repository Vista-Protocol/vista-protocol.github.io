import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Moralis from "moralis";
import { MoralisProvider } from "react-moralis";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const APP_ID = "zWytrx6G5R9k0UdpqvrptVYFTcuLiX7XMHcue9QJ";
const SERVER_URL = "https://l0fckgbjlk4g.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
