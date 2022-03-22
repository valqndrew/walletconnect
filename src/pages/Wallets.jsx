import React, { useContext } from "react";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LandingAppBar from "./Components/LandingAppBar";
import { WalletContext, WalletProvider } from "../context/WalletContext";

const WalletItem = ({ name, src }) => {
  const { dispatchWalletEvent } = useContext(WalletContext);

  const handleSetWallet = () => {
    dispatchWalletEvent("SET_WALLET", { wallet: name });
  };

  return (
    <Grid item align={"center"}>
      <Button
        // component={NavLink}
        onClick={handleSetWallet}
        // to="/import"
      >
        <Avatar src={src} sx={{ width: "72px", height: "72px" }} />
        <Typography variant="p">{name}</Typography>
      </Button>
    </Grid>
  );
};

const Wallets = () => {
  const { wallets } = useContext(WalletContext);

  // console.log(wallets);
  return (
    <Container align="center">
      <LandingAppBar />
      <Typography variant="h4" gutterBottom>
        Dapps
      </Typography>
      <Typography variant="p">
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
