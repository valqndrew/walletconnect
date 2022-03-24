import {
  Box,
  createTheme,
  IconButton,
  Paper,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { minHeight } from "@mui/system";
import { Link, NavLink } from "react-router-dom";

export const theme = createTheme({});

export const newTheme = createTheme({
  palette: {
    primary: {
      main: "#e0e0e0",
    },
    secondary: {
      main: "#263238",
    },
  },
});

export const SectionHeader = styled(Typography)(({}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const FeaturePaper = styled(Paper)(({}) => ({
  padding: theme.spacing(5),
}));

export const SocialIcon = styled(IconButton)(({}) => ({
  color: newTheme.palette.secondary.main,
}));

export const FooterLink = styled(NavLink)(({}) => ({
  textDecoration: "none",
  marginTop: theme.spacing(2),
  color: newTheme.palette.secondary.main,
}));

export const FooterTextField = styled(TextField)(({}) => ({
  marginBottom: theme.spacing(1),
}));

export const ImportTextField = styled(TextField)(({}) => ({
  mb: theme.spacing(2),
  width: "100%",
}));

export const WalletsToolbar = styled(Toolbar)(({}) => ({
  pt: 1,
  pb: 2,
  "@media all": {
    minHeight: 32,
  },
}));

export const HomeLink = styled(Link)(({}) => ({
  textDecoration: "none",
  color: "white",
}));

export const MissionBox = styled(Box)(({}) => ({
  background: newTheme.palette.secondary.main,
  color: "white",
}));
