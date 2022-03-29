import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { SignInGrid, SignInTextField } from "./styles/styles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
  };
  useEffect(() => {
    if (loading) return;
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
              Sign Up To DApps
            </Typography>
            <SignInTextField
              sx={{ mt: 2 }}
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <Button sx={{ mt: 2, p: 2 }} variant="contained" onClick={register}>
              Register
            </Button>
            <Button
              sx={{ mt: 2, p: 2 }}
              variant="contained"
              onClick={signInWithGoogle}
            >
              Register With Google
            </Button>
            <Button component={NavLink} to="/signin">
              Sign In
            </Button>
          </Box>
        </Container>
      </SignInGrid>
    </Grid>
  );
};

export default Register;
