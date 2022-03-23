import {
  createTheme,
  IconButton,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const theme = createTheme();

export const SectionHeader = styled(Typography)(({}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const FeaturePaper = styled(Paper)(({}) => ({
  padding: theme.spacing(5),
}));

export const SocialIcon = styled(IconButton)(({}) => ({
  color: theme.palette.primary.main,
}));

export const FooterLink = styled(NavLink)(({}) => ({
  textDecoration: "none",
  marginTop: theme.spacing(2),
  color: theme.palette.primary.main,
}));

export const FooterTextField = styled(TextField)(({}) => ({
  marginBottom: theme.spacing(1),
}));

export const ImportTextField = styled(TextField)(({}) => ({
  mb: theme.spacing(2),
  width: "100%"
}))