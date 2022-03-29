import { Button, Container, Grid,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignInGrid, SignInTextField } from "./styles/styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/wallets");
  }, [user, loading]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <SignInGrid item xs={3} sx={{ p: 10 }}>
        <Container maxWidth="xs">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" align="center" color="primary">
              Sign In To DApps
            </Typography>
            <SignInTextField
              sx={{ mt: 2 }}
              label="E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SignInTextField
              sx={{ mt: 2 }}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              sx={{ mt: 2, p: 2 }}
              variant="contained"
            >
              Sign In
            </Button>
            <Button
              sx={{ mt: 2, p: 2 }}
              variant="contained"
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
            <Button component={NavLink} to="/register">
              Register
            </Button>
            <Button sx={{ mt: 2, p: 2 }} component={NavLink} to="/reset">
              Forgot Password?
            </Button>
          </Box>
        </Container>
      </SignInGrid>
    </Grid>
  );
};

export default SignIn;
