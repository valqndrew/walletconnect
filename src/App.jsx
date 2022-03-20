import Wallets from "./pages/Wallets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportWallet from "./pages/ImportWallet";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="import" element={<ImportWallet />} />
        <Route path="wallets" element={<Wallets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
