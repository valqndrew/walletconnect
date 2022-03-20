import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Features from "./Components/Features";
import ResponsiveAppBar from "./ResponsiveAppbar";

const works = [
  {
    title: "Open DApps",
    info: "Go the DApps page and select the wallet of your choice.",
  },
];

const Work = ({ title, info }) => {
  return (
    <Grid item>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="p">{info}</Typography>
    </Grid>
  );
};

const HowItWorks = () => {
  return (
    <>
      <Typography variant="h4">How It Works</Typography>
      <Grid container align="center" justifyContent="center">
        {works.map(({ title, info }) => (
          <Work title={title} info={info} />
        ))}
      </Grid>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="p" align="left">
            With our highly secure verification and integration system with top
            wallet providers, you can efficiently manage all your wallets in one
            app
          </Typography>
          <Box sx={{ display: "flex" }}>
            <h2>f</h2>
            <h2>t</h2>
            <h2>l</h2>
            <h2>y</h2>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Quick Link</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Link>About Us</Link>
            <Link>Our Team</Link>
            <Link>Our Blog</Link>
            <Link>How It Works</Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Help</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link>Contact Us</Link>
            <Link>Support Info</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Newsletter</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField placeholder="Your Name" />
            <TextField placeholder="Email Address" />
            <Button variant="contained">Subscribe</Button>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="p">
        walletconnect.com c 2022 - All rights reserve
      </Typography>
    </>
  );
};

const Landing = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container align="center">
        <Typography variant="h6">
          The best way to integrate your decentralized wallet.
        </Typography>
        <Typography>
          Secure and integrate all decentralized wallet Protocols from a single
          app to resolve all transaction error, missing token and other wallet
          related glitches.
        </Typography>
        <Button variant="contained">Connect To DApps</Button>
        <Button>How It Works</Button>
        {/* Our Features */}
        <Features />
        <HowItWorks />

        <Footer />
      </Container>
    </>
  );
};

export default Landing;
