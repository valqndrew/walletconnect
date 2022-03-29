import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { WalletContext } from "../context/WalletContext";
import "./styles/styles.css";
import LandingAppBar from "./Components/LandingAppBar";

const WalletItem = ({ name, src }) => {
  const { setWallet } = useContext(WalletContext);

  const handleSetWallet = () => {
    setWallet(name);
  };

  return (
    <Grid item xs={6} md={4} lg={3} align={"center"}>
      <Button
        color="secondary"
        component={NavLink}
        onClick={handleSetWallet}
        to="/import"
      >
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
    <>
      <LandingAppBar />
      <Container align="center">
        <Typography gutterBottom>Welcome {name}</Typography>
        <Typography variant="h4" gutterBottom>
          Dapps
        </Typography>
        <Typography variant="p" sx={{ mb: 2 }}>
          Registry to connect all wallets and Apps supporting WalletConnect
          Protocols to dapps
        </Typography>
        <Grid container justifyContent={"center"} spacing={12}>
          {wallets.map(({ name, src }, index) => (
            <WalletItem name={name} src={src} key={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Wallets;
