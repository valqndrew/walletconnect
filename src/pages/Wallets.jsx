import React, { useContext } from "react";
import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LandingAppBar from "./Components/LandingAppBar";
import { WalletContext, WalletProvider } from "../context/WalletContext";

const WalletItem = ({ name, src }) => {
  const { setWallet } = useContext(WalletContext);

  const handleSetWallet = () => {
    setWallet(name);
  };

  return (
    <Grid item xs={6} align={"center"}>
      <Button component={NavLink} onClick={handleSetWallet} to="/import">
        <Box>
          <img src={src} className="hero-img" />
          <Typography variant="p">{name}</Typography>
        </Box>
      </Button>
    </Grid>
  );
};

const Wallets = () => {
  const { wallets } = useContext(WalletContext);

  // console.log(wallets);
  return (
    <Container align="center">
      <Typography variant="h4" gutterBottom>
        Dapps
      </Typography>
      <Typography variant="p" sx={{mb: 2}}>
        Registry to connect all wallets and Apps supporting WalletConnect
        Protocols to dapps
      </Typography>
      <Grid container justifyContent={"center"} spacing={12}>
        {wallets.map(({ name, src }) => (
          <WalletItem name={name} src={src} />
        ))}
      </Grid>
    </Container>
  );
};

export default Wallets;
