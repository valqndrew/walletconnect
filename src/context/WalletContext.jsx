import React, { createContext, useState } from "react";
import Trust from "../img/trust.svg";
import Metamask from "../img/metamask.svg";
export const WalletContext = createContext();

export const WalletProvider = (props) => {
  // const [currentWallet, setCurrentWallet] = useState(null);

  const [wallets, setWallets] = useState([
    {
      name: "trustwallet",
      src: Trust,
    },
    {
      name: "metamask",
      src: Metamask,
    },
    {
      name: "trustwallet",
      src: Trust,
    },
    {
      name: "metamask",
      src: Metamask,
    },
    {
      name: "trustwallet",
      src: Trust,
    },
    {
      name: "metamask",
      src: Metamask,
    },
  ]);

  const [wallet, setWallet] = useState(null);

  const dispatchWalletEvent = (actionType, payload) => {
    switch (actionType) {
      case "SET_WALLET":
        setWallet(payload.wallet);
        return;
      default:
        return;
    }
  };

  return (
    <WalletContext.Provider value={{ wallets, dispatchWalletEvent }}>
      {props.children}
    </WalletContext.Provider>
  );
};
