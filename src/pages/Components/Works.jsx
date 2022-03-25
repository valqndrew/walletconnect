import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  createTheme,
  Grid,
  Icon,
  SvgIcon,
  Typography,
} from "@mui/material";
import Control from "../../img/works/control.png";
import Dapps from "../../img/works/dapps.png";
import Key from "../../img/works/key.png";
import { SectionHeader } from "../styles/styles";

const works = [
  {
    title: "Open DApps",
    info: "Go the DApps page and select the wallet of your choice.",
    icon: Dapps,
  },
  {
    title: "Connect Keys",
    info: "Input the details required and the system will take it from there.",
    icon: Key,
  },
  {
    title: "Get Full Control",
    info: "Now you are in control of your decentralize wallets with all glitches fixed.",
    icon: Control,
  },
];

const Work = ({ title, info, icon }) => {
  return (
    <Grid item xs={12} md={6} lg={4} sx={{mt: 4}}>
      <Box>
        <img src={icon} className="icon" />
        <Typography variant="h6">{title}</Typography>
        <Typography variant="p">{info}</Typography>
      </Box>
    </Grid>
  );
};

const HowItWorks = () => {
  return (
    <>
      <SectionHeader variant="h4">How To Be Secure</SectionHeader>
      <Grid container align="center" justifyContent="center" spacing={2}>
        {works.map(({ title, info, icon }) => (
          <Work title={title} info={info} icon={icon} />
        ))}
      </Grid>
    </>
  );
};

export default HowItWorks;
