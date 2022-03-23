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
import Minting from "../img/landing/minting.png"

import Control from "../img/landing/bitcoin-control.png"
import Appstore from "../img/landing/appstore.png"
import Play from "../img/landing/playstore.png"


import "./styles/styles.css";

const MissionItem = ({ story }) => {
  return (
    <Box sx={{display: "flex"}}>
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
  "Using Smart Contracts system etc",
];
const Landing = () => {
  return (
    <>
      <Container align="center" sx={{ marginTop: "24px" }}>
        <Typography variant="h4" gutterBottom>
          The best way to integrate your decentralized wallet.
        </Typography>

        <Box sx={{ marginTop: "16px" }}>
          <Button component={NavLink} to="/wallets" variant="contained">
            Connect To DApps
          </Button>
          <Button component={NavLink} to="/help">
            How It Works
          </Button>
        </Box>

        <Box>
          <img src={BackgroundImg} className="hero-img" />
        </Box>

        <Typography variant="p" gutterBottom>
          Secure and integrate all decentralized wallet Protocols from a single
          app to resolve all transaction error, missing token and other wallet
          related glitches.
        </Typography>

        {/* <Hero /> */}

        <Features />
        <HowItWorks />

        <Box>
          <Typography variant="h5" align="left">
            Our mission is using technology to make transactions easier.
          </Typography>
          {stories.map((story) => (
            <MissionItem story={story} />
          ))}
          <img className="hero-img" src={Minting} />
          <Typography variant="h6">Download The Apps</Typography>

          <Typography variant="h5">Trusted platform anytime & anywhere</Typography>
          <Box>
            <img src={Appstore} className="icon" />
            <img src={Play} className="icon" />

          </Box>

          <img src={Control} className="hero-img" />

        </Box>

        <Footer />
      </Container>
    </>
  );
};

export default Landing;
