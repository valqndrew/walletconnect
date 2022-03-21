import React, { useContext } from "react";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LandingAppBar from "./Components/LandingAppBar";
import { WalletContext, WalletProvider } from "../context/WalletContext";

const WalletItem = ({ name, src }) => {
  return (
    <Grid item align={"center"}>
      <Link to="/import">
        <Avatar src={src} sx={{ width: "72px", height: "72px" }} />
        <Typography variant="p">{name}</Typography>
      </Link>
    </Grid>
  );
};

const Wallets = () => {
  const [wallets, setWallets] = useContext(WalletContext);
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
