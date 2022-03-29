import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { SignInGrid, SignInTextField } from "./styles/styles";

const Reset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
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
              Reset Password
            </Typography>

            <SignInTextField
              sx={{ mt: 2 }}
              label="E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              sx={{ mt: 2, p: 2 }}
              variant="contained"
            >
              Send Password Reset Email
            </Button>
          </Box>
        </Container>
      </SignInGrid>
    </Grid>
  );
};

export default Reset;
