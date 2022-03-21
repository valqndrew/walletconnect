import Wallets from "./pages/Wallets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportWallet from "./pages/ImportWallet";
import Landing from "./pages/Landing";
import { WalletProvider } from "./context/WalletContext";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="import" element={<ImportWallet />} />
          <Route path="wallets" element={<Wallets />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
