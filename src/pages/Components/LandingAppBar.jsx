import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { HomeLink } from "../styles/styles";

import Logo from "../../img/logo.jpeg";

const pages = ["Integrate", "Secure", "Authenticate", "Lock", "USE"];

const LandingAppBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {menuOpen ? (
        <Box
          sx={{ display: "flex", flexDirection: "column" }}
          justifyContent="center"
          alignItems="center"
        >
          {pages.map((page) => (
            <Button
              color="secondary"
              variant="outlined"
              to="/wallets"
              component={NavLink}
              sx={{ width: "100%" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      ) : null}
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
              <HomeLink to="/">
                <Typography variant="h5">DappsLive</Typography>
              </HomeLink>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <HomeLink to="/">
                <Typography variant="h4">DAppsLive</Typography>
              </HomeLink>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={toggleMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default LandingAppBar;
