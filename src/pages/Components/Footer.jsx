import { Grid, Typography, Box, Button } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SocialIcon, FooterLink, FooterTextField } from "../styles/styles";

const Footer = () => {
  return (
    <>
      <Grid sx={{ mt: 2 }} container align="left" spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="p" align="left">
            With our highly secure verification and integration system with top
            wallet providers, you can efficiently manage all your wallets in one
            app
          </Typography>
          <Box sx={{ display: "flex" }}>
            <SocialIcon>
              <FacebookRoundedIcon fontSize="large" />
            </SocialIcon>
            <SocialIcon href="https://t.me/DappsLiveBot" target="_blank">
              <TelegramIcon fontSize="large" />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/walletconnect" target="_blank">
              <TwitterIcon fontSize="large" />
            </SocialIcon>
            <SocialIcon>
              <YouTubeIcon fontSize="large" />
            </SocialIcon>
          </Box>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Typography variant="h6">Quick Link</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <FooterLink to={"#"}>About Us</FooterLink>
            <FooterLink to={"#"}>Our Team</FooterLink>
            <FooterLink to={"#"}>Our Blog</FooterLink>
            <FooterLink to={"#"}>How It Works</FooterLink>
          </Box>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Typography variant="h6">Help</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FooterLink to={"#"}>Contact Us</FooterLink>
            <FooterLink to={"#"}>Support Info</FooterLink>
            <FooterLink to={"#"}>Privacy Policy</FooterLink>
            <FooterLink to={"#"}>Terms of Service</FooterLink>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Newsletter
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FooterTextField placeholder="Your Name" />
            <FooterTextField placeholder="Email Address" />
            <Button variant="contained">Subscribe</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid item sx={{ mt: 2 }}>
        <Typography variant="p">
          dappslive.com c 2022 - All rights reserved
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
