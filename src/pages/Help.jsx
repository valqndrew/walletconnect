import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Footer from "./Components/Footer";
import LandingAppBar from "./Components/LandingAppBar";

import A from "../img/img-1.png";
import B from "../img/img-2.png";
import C from "../img/img-3.png";
import D from "../img/img-4.png";
import E from "../img/img-5.jpeg";
import F from "../img/img-6.png";
import G from "../img/img-7.png";
import H from "../img/img-8.png";

const Help = () => {
  return (
    <Container>
      <LandingAppBar />
      <Box>
        <img src={A} />
      </Box>
      <Typography variant="h4">Connecting to DApps</Typography>
      <Typography variant="p">
        One of the best features of a decentralized wallet is that it allows
        access to decentralized apps (DApps). We know that the removal of the
        DApp browser has been difficult for a lot of our users, specially those
        who are using an iOS device. We’d like to express our admiration for
        Apple and the technology & services they provide and are completely
        within their rights to enforce the rules of their platform which of
        course we fully respect. So, we’ve been working hard behind the scenes
        to establish an alternative for all of our users. With the recent update
        to the WalletConnect protocol; our development team has added a feature
        that allows multiple active sessions when accessing DApps - which we
        believe to be a great alternative to our initial DApp browser.
      </Typography>

      <Container>
        <img src={B} />
      </Container>

      <Typography variant="p">
        Once a connection is established, the app keeps the session running in
        the background in order to have a more streamlined experience even if
        the DApp is being accessed on a 3rd party browser. And it even allows
        you to connect your wallet to any device at the same time.
      </Typography>

      <Container>
        <img src={C} />
      </Container>
      <Typography variant="h6">
        Once a connection is established, the app keeps the session running in
        the background in order to have a more streamlined experience even if
        the DApp is being accessed on a 3rd party browser. And it even allows
        you to connect your wallet to any device at the same time.
      </Typography>

      <Typography variant="p">
        With Mobile Linking, there is no need to use another device. Just open
        the DApp site on your mobile browser and connect your Trust Wallet. We
        have detailed guide available: WalletConnect Mobile Linking with Trust
        Wallet.
      </Typography>

      <Box sx={{ display: "flex" }}>
        <img src={D} />
        <img src={E} />
      </Box>

      <Typography variant="p">
        Simply choose WalletConnect on the connection options then select Trust
        for the mobile options. At the confirmation screen, tap on Connect to
        continue. Please be aware of “The Risks of Using DApps”.
      </Typography>

      <Box sx={{ display: "flex" }}>
        <img src={F} />
        <img src={G} />
      </Box>
      <Footer />
    </Container>
  );
};

export default Help;
