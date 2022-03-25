import React, { useContext } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { WalletContext, WalletProvider } from "../context/WalletContext";
import { WalletsToolbar } from "./styles/styles";
import WalletConnect from "../img/walletconnect-logo.svg";
import "./styles/styles.css";
import LandingAppBar from "./Components/LandingAppBar";

const WalletItem = ({ name, src }) => {
  const { setWallet } = useContext(WalletContext);

  const handleSetWallet = () => {
    setWallet(name);
  };

  return (
    <Grid item xs={6} md={4} lg={3} align={"center"}>
      <Button color="secondary" component={NavLink} onClick={handleSetWallet} to="/import">
        <Box>
          <img src={src} className="hero-img" />
          <Typography variant="p">{name}</Typography>
        </Box>
      </Button>
    </Grid>
  );
};

const WalletsAppBar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <WalletsToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="secondary">
              Connect DApps
            </Typography>
            {/* <Container> */}
              <img src={WalletConnect} className="icon" />
            {/* </Container> */}
            <Typography variant="h6" color="secondary">
              Wallets
            </Typography>
          </Box>
        </WalletsToolbar>
      </AppBar>
    </Box>
  );
};

const Wallets = () => {
  const { wallets } = useContext(WalletContext);

  // console.log(wallets);
  return (
    <>
      <LandingAppBar />
      <Container align="center">
        <Typography variant="h4" gutterBottom>
          Dapps
        </Typography>
        <Typography variant="p" sx={{ mb: 2 }}>
          Registry to connect all wallets and Apps supporting WalletConnect
          Protocols to dapps
        </Typography>
        <Grid container justifyContent={"center"} spacing={12}>
          {wallets.map(({ name, src }) => (
            <WalletItem name={name} src={src} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Wallets;
