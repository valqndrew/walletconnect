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
import BackgroundImg from "../img/background-image.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Minting from "../img/landing/minting.png";

import Control from "../img/landing/bitcoin-control.png";
import Appstore from "../img/landing/appstore.png";
import Play from "../img/landing/playstore.png";

import "./styles/styles.css";
import { MissionContainer, newTheme } from "./styles/styles";

const MissionItem = ({ story }) => {
  return (
    <Box sx={{ display: "flex", mt: 2, ml: 1 }}>
      <Icon>
        <CheckCircleOutlineIcon />
      </Icon>
      <Typography>{story}</Typography>
    </Box>
  );
};

const stories = [
  "Platform for launching your ICO",
  "Token Fixed exchange rates",
  "Using Smart Contracts system",
];
const Landing = () => {
  return (
    <>
      <LandingAppBar />

      <Container align="center" sx={{ marginTop: "24px" }}>
        <Grid container>
          <Grid item sx={12}>
            <Typography variant="h4" gutterBottom>
              The best way to integrate your decentralized wallet.
            </Typography>
          </Grid>
          <Grid item sx={12} md={6} justifyContent="center" alignItems="center">
            <Box sx={{ display: "flex", marginTop: "16px" }}>
              <Button component={NavLink} to="/wallets" variant="contained">
                Connect To DApps
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                component={NavLink}
                to="/help"
                sx={{ ml: 1 }}
              >
                How It Works
              </Button>
            </Box>
          </Grid>

          <Grid item sx={12} md={6}>
            <Box>
              <img src={BackgroundImg} className="hero-img" />
            </Box>
          </Grid>

          <Grid item sx={12}>
            <Typography variant="p" gutterBottom>
              Secure and integrate all decentralized wallet Protocols from a
              single app to resolve all transaction error, missing token and
              other wallet related glitches.
            </Typography>
          </Grid>
        </Grid>

        {/* <Hero /> */}

        <Features />
        <HowItWorks />

        <MissionContainer sx={{ p: 2, mt: 2 }} maxWidth={"md"}>
          <Typography variant="h5" align="left" sx={{ mt: 2 }}>
            Our mission is using technology to make transactions easier.
          </Typography>
          {stories.map((story) => (
            <MissionItem story={story} />
          ))}
          <Box sx={{ mt: 2 }}>
            <img className="hero-img" src={Minting} />
          </Box>
          <Typography variant="h6">Download The Apps</Typography>

          <Typography variant="h5">
            Trusted platform anytime & anywhere
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Appstore} className="icon store" />
            <img src={Play} className="icon store" />
          </Box>
          <Box sx={{ mt: 2 }}>
            <img src={Control} className="hero-img" />
          </Box>
        </MissionContainer>

        <Footer />
      </Container>
    </>
  );
};

export default Landing;
