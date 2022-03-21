import styled from "@emotion/styled";
import {
  Avatar,
  createTheme,
  Grid,
  Icon,
  SvgIcon,
  Typography,
} from "@mui/material";
import Block from "../../img/block.svg";
import Bubble from "../../img/bubble.svg";
import CentralBitcoin from "../../img/central-bitcoin.svg";
import { SectionHeader } from "../styles/styles";



const works = [
  {
    title: "Open DApps",
    info: "Go the DApps page and select the wallet of your choice.",
    icon: Bubble,
  },
  {
    title: "Connect Keys",
    info: "Input the details required and the system will take it from there.",
    icon: CentralBitcoin,
  },
  {
    title: "Get Full Control",
    info: "Now you are in control of your decentralize wallets with all glitches fixed.",
    icon: Block,
  },
];

const Work = ({ title, info, icon }) => {
  return (
    <Grid item>
      <Avatar src={icon} />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="p">{info}</Typography>
    </Grid>
  );
};

const HowItWorks = () => {
  return (
    <>
      <SectionHeader variant="h4">How It Works</SectionHeader>
      <Grid container align="center" justifyContent="center" spacing={2}>
        {works.map(({ title, info, icon }) => (
          <Work title={title} info={info} icon={icon} />
        ))}
      </Grid>
    </>
  );
};

export default HowItWorks;
