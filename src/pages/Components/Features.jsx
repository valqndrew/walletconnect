import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
import MoneyBag from "../../img/features/money-bag.svg";
import Bitcoin from "../../img/features/bitcoin-1.svg";
import BitcoinCard from "../../img/features/bitcoin-2.svg";
import Gas from "../../img/features/gas.png";
import Staking from "../../img/features/proof-of-stake.png";
import Reset from "../../img/features/reset.png";
import Recovery from "../../img/features/recovery.png";


import { FeaturePaper, SectionHeader, theme } from "../styles/styles";
import { NavLink } from "react-router-dom";
import "../styles/styles.css";

const features = [
  {
    title: "Rectification",
    info: "Issues with your wallet? We can easily fix it.",
    icon: MoneyBag,
  },
  {
    title: "Verification",
    info: "Issues with your wallet? We can easily fix it.",
    icon: Bitcoin,
  },
  {
    title: "Synchronization",
    info: "Issues with your wallet? We can easily fix it.",
    icon: BitcoinCard,
  },
  {
    title: "Staking",
    icon: Staking
  },
  {
    title: "Gas Fee",
    icon: Gas
  },
  {
    title: "Reset",
    icon: Reset
  },
  {
    title: "Recovery",
    icon: Recovery
  },
];

const Feature = ({ title, info, icon }) => {
  return (
    <Grid item xs={12}>
      <FeaturePaper>
        <img src={icon} className={"icon"} />
        <Typography>{title}</Typography>

        <Typography>{info}</Typography>
        <Button component={NavLink} to="/wallets" variant="contained">
          Resolve
        </Button>
      </FeaturePaper>
    </Grid>
  );
};

const Features = () => {
  return (
    <>
      <SectionHeader variant="h4" gutterBottom>
        Our Features
      </SectionHeader>

      <Grid container spacing={8} align="center" justifyContent="center">
        {features.map(({ title, info, icon }) => (
          <Feature title={title} info={info} icon={icon} />
        ))}
      </Grid>
    </>
  );
};

export default Features;
