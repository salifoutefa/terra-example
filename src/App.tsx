import * as React from "react"
import {
  ChakraProvider,
  Box,
  extendTheme,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';
import { ConnectSample } from "./components/ConnectSample"
import { QuerySample } from "./components/QuerySample"
import { TxSample } from "./components/TxSample"
import { SignSample } from "./components/SignSample"
import { SignBytesSample } from "./components/SignBytesSample"
import { CW20TokensSample } from "./components/CW20TokensSample"
import { NetworkSample } from "./components/NetworkSample"
import SidebarWithHeader from "components/SidebarWithHeader"



const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#38B2AC",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

export const App = () => (

  <ChakraProvider theme={theme}>
    <SidebarWithHeader></SidebarWithHeader>
    <ConnectSample />
    <QuerySample />
    <TxSample />
    <SignSample />
    <SignBytesSample />
    <CW20TokensSample />
    <NetworkSample />
    <Footer></Footer>
  </ChakraProvider>
);


