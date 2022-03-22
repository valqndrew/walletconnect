import Wallets from "./pages/Wallets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportWallet from "./pages/ImportWallet";
import Landing from "./pages/Landing";
import { WalletProvider } from "./context/WalletContext";
import Verify from "./pages/Verify";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="import" element={<ImportWallet />} />
          <Route path="wallets" element={<Wallets />} />
          <Route path="verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
