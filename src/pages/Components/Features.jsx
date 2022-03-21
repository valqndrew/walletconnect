import {
  Avatar,
  Button,
  Grid,
  Paper,
  SvgIcon,
  Typography,
} from "@mui/material";
import MoneyBag from "../../img/money-bag.svg";
import Bitcoin from "../../img/bitcoin-1.svg";
import BitcoinCard from "../../img/bitcoin-2.svg";
import { FeaturePaper, SectionHeader } from "../styles/styles";

const features = [
  {
    title: "Rectification",
    info: "Issues with your wallet? We can easily fix it.",
    icon: MoneyBag,
  },
  {
    title: "Rectification",
    info: "Issues with your wallet? We can easily fix it.",
    icon: Bitcoin,
  },
  {
    title: "Rectification",
    info: "Issues with your wallet? We can easily fix it.",
    icon: BitcoinCard,
  },
];

const Feature = ({ title, info, icon }) => {
  return (
    <Grid item xs={12}>
      <FeaturePaper>
        <Avatar src={icon} />
        <Typography>{title}</Typography>
        <Typography>{info}</Typography>
        <Button variant="contained">Resolve</Button>
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
