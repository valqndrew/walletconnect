import { Box, Button, Grid, Typography } from "@mui/material";
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
    info: "We help with verifications, no hustle",
    icon: Bitcoin,
  },
  {
    title: "Refunds",
    info: "Get refunds on wrong transfers and more",
    icon: BitcoinCard,
  },
  {
    title: "Staking",
    info: "Get involved in bidding for NFTs",
    icon: Staking,
  },
  {
    title: "Gas Fee",
    info: "We handle all your gas fees. No charges",
    icon: Gas,
  },
  {
    title: "Reset",
    info: "We could help you start over",
    icon: Reset,
  },
  {
    title: "Recovery",
    info: "We could help you recover lost wallets",
    icon: Recovery,
  },
];

const Feature = ({ title, info, icon }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <FeaturePaper>
        <img src={icon} className={"icon"} />
        <Typography variant="h6">{title}</Typography>

        <Typography variant="p">
          {info}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button component={NavLink} to="/wallets" variant="contained">
            Resolve
          </Button>
        </Box>
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
        {features.map(({ title, info, icon }, index) => (
          <Feature key={index} title={title} info={info} icon={icon} />
        ))}
      </Grid>
    </>
  );
};

export default Features;
