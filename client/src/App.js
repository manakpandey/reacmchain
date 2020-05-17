import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Factory from "./pages/Factory/Factory";

const web3 = new Web3(Web3.givenProvider);

function App() {
  const [account, setAccount] = useState("0x00");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getWalletAccount() {
      const accounts = await window.ethereum.enable();
      setAccount(accounts[0]);
      setLoading(false);
    }
    getWalletAccount();
  });

  return <>{isLoading ? <div /> : <Factory web3={web3} account={account} />}</>;
}

export default App;
