import React, { useState } from "react";
import PropTypes from "prop-types";
import { constants } from "../../config";
import { userAbi } from "../../abi/abis";

const AddDealer = ({ web3 }) => {
  const UserContract = new web3.eth.Contract(
    userAbi,
    constants.contractAddress.User
  );

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await UserContract.methods.addUser(address, 3).estimateGas();

    const result = await UserContract.methods.addUser(address, 3).send({
      from: account,
      gas,
    });
    console.log(result);
  };

  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          name="name"
          onChange={(t) => setName(t.target.value)}
          className="form-control"
          id="nameImput"
          placeholder="Dealer Name"
        />
      </div>
      <div className="form-group">
        <input
          name="address"
          onChange={(t) => setAddress(t.target.value)}
          className="form-control"
          id="addressImput"
          placeholder="Wallet Address"
        />
      </div>
      <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
        Add Dealer
      </button>
    </div>
  );
};

AddDealer.propTypes = {
  web3: PropTypes.object,
};

export default AddDealer;
