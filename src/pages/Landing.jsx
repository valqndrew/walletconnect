import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  Icon,
  IconButton,
  Link,
  Paper,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import Features from "./Components/Features";
import HeroImage from "../img/hero-image.svg";
import HowItWorks from "./Components/Works";
import Footer from "./Components/Footer";
import LandingAppBar from "./Components/LandingAppBar";
import { NavLink } from "react-router-dom";

import Hero from "../img/hero-image.svg";

const Landing = () => {
  return (
    <>
      <LandingAppBar />
      <Container align="center" sx={{ marginTop: "24px" }}>
        <Typography variant="h6" gutterBottom>
          The best way to integrate your decentralized wallet.
        </Typography>
        <Typography variant="p" gutterBottom>
          Secure and integrate all decentralized wallet Protocols from a single
          app to resolve all transaction error, missing token and other wallet
          related glitches.
        </Typography>
        <Box sx={{ marginTop: "16px" }}>
          <Button component={NavLink} to="/wallets" variant="contained">
            Connect To DApps
          </Button>
          <Button>How It Works</Button>
        </Box>

        {/* <Hero /> */}

        <Features />
        <HowItWorks />

        <Footer />
      </Container>
    </>
  );
};

export default Landing;
