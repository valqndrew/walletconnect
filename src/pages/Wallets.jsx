import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Trust from "../img/trust.svg";
import Metamask from "../img/metamask.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "space-between",
  justifyContent: "space-between",
  paddingTop: 12,
  paddingBottom: 12,
  "@media all": {
    minHeight: 128,
  },
}));

function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Typography
            variant="h5"
            // noWrap
            // component="div"
            // sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            Connect DAPPS-Apps
          </Typography>
          <Typography variant="h1">WC</Typography>
          <Typography
            variant="h5"
            // noWrap
            // component="div"
            // sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            Wallets
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

const wallets = [
  {
    name: "trustwallet",
    src: Trust,
  },
  {
    name: "metamask",
    src: Metamask,
  },
  {
    name: "trustwallet",
    src: Trust,
  },
  {
    name: "metamask",
    src: Metamask,
  },
  {
    name: "trustwallet",
    src: Trust,
  },
  {
    name: "metamask",
    src: Metamask,
  },
];

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
  return (
    <Container align="center">
      <ProminentAppBar />
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
