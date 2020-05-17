import React, { useState } from "react";
import PropTypes from "prop-types";
import { constants } from "../../config";
import { userAbi } from "../../abi/abis";

const AddDealer = ({ web3, account }) => {
  const UserContract = new web3.eth.Contract(
    userAbi,
    constants.contractAddress.User
  );

  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gas = await UserContract.methods.addUser(address, 3, phno, name).estimateGas();
    const result = await UserContract.methods.addUser(address, 3, phno, name).send({
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
          placeholder="Dealer Name"
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="phone"
          onChange={(t) => setPhno(t.target.value)}
          className="form-control"
          placeholder="Dealer Phone Number" 
        />
      </div>
      <div className="form-group">
        <input
          name="address"
          onChange={(t) => setAddress(t.target.value)}
          className="form-control"
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
  account: PropTypes.string,
};

export default AddDealer;
