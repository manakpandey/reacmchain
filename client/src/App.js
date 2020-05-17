import React from "react";
import Web3 from "web3";
import Factory from "./pages/Factory/Factory";

const web3 = new Web3(Web3.givenProvider);

function App() {

  return (
    <>
      <Factory web3={web3} />
    </>
  );
}

export default App;
