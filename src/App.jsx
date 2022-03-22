import Wallets from "./pages/Wallets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportWallet from "./pages/ImportWallet";
import Landing from "./pages/Landing";
import { WalletProvider } from "./context/WalletContext";
import Verify from "./pages/Verify";
import Help from "./pages/Help";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="import" element={<ImportWallet />} />
          <Route path="wallets" element={<Wallets />} />
          <Route path="verify" element={<Verify />} />
          <Route path="help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
