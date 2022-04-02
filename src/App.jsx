import Wallets from "./pages/Wallets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportWallet from "./pages/ImportWallet";
import Landing from "./pages/Landing";
import { WalletProvider } from "./context/WalletContext";
import Verify from "./pages/Verify";
import Help from "./pages/Help";
import LandingAppBar from "./pages/Components/LandingAppBar";
import { ThemeProvider } from "@mui/material";
import { newTheme } from "./pages/styles/styles";
import SignIn from "./pages/SignIn";
import Reset from "./pages/Reset";
import Register from "./pages/Register";
import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

function App() {
  useScript("//code.tidio.co/yzdudvmmmgps7zlefermcr8q7pyxbzhf.js");
  return (
    <>
      <ThemeProvider theme={newTheme}>
        <WalletProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="import" element={<ImportWallet />} />
              <Route path="wallets" element={<Wallets />} />
              <Route path="verify" element={<Verify />} />
              <Route path="help" element={<Help />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="reset" element={<Reset />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </WalletProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
