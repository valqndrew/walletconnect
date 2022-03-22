import { Box, Container, Typography } from "@mui/material";
import React from "react";
import QRCode from "../img/qr-code.svg";

const Verify = () => {
  return (
    <Container maxWidth="xs">
      <img src={QRCode} />
      <Typography align="center">Please Contact Admin To Verify</Typography>
    </Container>
  );
};

export default Verify;
