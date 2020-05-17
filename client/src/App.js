import React from "react";
import Web3 from "web3";
import FactoryHome from "./pages/Factory/FactoryHome";
import AddDealer from "./components/forms/AddDealer";

const web3 = new Web3(Web3.givenProvider);

function App() {
  return (
    <>
      <AddDealer web3={web3}/>
    </>
  );
}

export default App;
