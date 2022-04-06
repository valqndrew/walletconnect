import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { HomeLink } from "../styles/styles";

import Logo from "../../img/logo.svg";

const pages = ["Integrate", "Secure", "Authenticate", "Lock", "USE"];

const LandingAppBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={6} md={3} component={NavLink} to="/">
                <img src={Logo} className="appbar-logo" />
              </Grid>
              <Grid
                item
                xs={6}
                display={{ xs: "flex", md: "none" }}
                justifyContent="flex-end"
              >
                <IconButton size="large" onClick={toggleMenu}>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                md={9}
                display={{ xs: "none", md: "flex" }}
                justifyContent="flex-end"
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={toggleMenu}
                    // sx={{ my: 2, display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

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
    </>
  );
};
export default LandingAppBar;
