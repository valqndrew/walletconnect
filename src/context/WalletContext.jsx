import React, { createContext, useState } from "react";
import Trust from "../img/trust.svg";
import Metamask from "../img/metamask.svg";
export const WalletContext = createContext();

export const WalletProvider = (props) => {
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
  return (
    <WalletContext.Provider value={[wallets, setWallets]}>
      {props.children}
    </WalletContext.Provider>
  );
};
