import { Container, Typography } from "@mui/material";
import React from "react";
import Footer from "./Components/Footer";
import LandingAppBar from "./Components/LandingAppBar";

import B from "../img/help/img-1.jpeg";
import C from "../img/help/img-2.jpeg";
import D from "../img/help/img-4.png";
import F from "../img/help/img-6.png";

import "./styles/styles.css";

const Help = () => {
  return (
    <>
      <LandingAppBar />
      <Container>
        <Typography variant="h3" gutterBottom>
          Multi Session Wallet Authenticator
        </Typography>
        <Typography variant="h4" gutterBottom>
          Connecting to DApps
        </Typography>
        <Typography variant="p" gutterBottom>
          One of the best features of a decentralized wallet is that it allows
          access to decentralized apps (DApps). Our development team has added a
          feature that allows multiple active sessions when accessing DApps -
          which we believe to be a great alternative to our initial DApp
          browser.
        </Typography>

        <Container sx={{ mt: 2, mb: 2 }}>
          <img src={B} class="icon" />
        </Container>

        <Typography variant="p">
          Once a connection is established, the app keeps the session running in
          the background in order to have a more streamlined experience even if
          the DApp is being accessed on a 3rd party browser. And it even allows
          you to connect your wallet to any device at the same time.
        </Typography>

        <Container sx={{ mt: 2, mb: 2 }}>
          <img src={C} />
        </Container>

        <Typography variant="p">
          With Mobile Linking, there is no need to use another device. Just open
          the DApp site on your mobile browser and get connected. We have
          detailed guide available
        </Typography>

        <Container sx={{ mt: 2, mb: 2 }}>
          <img src={D} />
        </Container>

        <Typography variant="h4">
          Multi Wallet Session Connection Enabled
        </Typography>

        <Container sx={{ mt: 2, mb: 2 }}>
          <img src={F} />
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Help;
