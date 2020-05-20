import React, { useState } from "react";
import PropTypes from "prop-types";
import { constants } from "../../config";
import { productAbi } from "../../abi/product.abi";

const AddProduct = ({ web3, account, update, exit }) => {
  const ProductContract = new web3.eth.Contract(
    productAbi,
    constants.contractAddress.Product
  );

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const gas = await ProductContract.methods
        .addProduct(name)
        .estimateGas();
      const result = await ProductContract.methods
        .addProduct(name)
        .send({
          from: account,
          gas,
        });
      console.log(result);
      update();
      exit();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            onChange={(t) => setName(t.target.value)}
            className="form-control"
            placeholder="Product Name"
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary" >Add Raw Product</button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
  update: PropTypes.func,
  exit: PropTypes.func,
};

export default AddProduct;
