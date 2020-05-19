import React, { useState } from "react";
import PropTypes from "prop-types";
import { constants } from "../../config";
<<<<<<< HEAD
import { userAbi } from "../../abi/abis";
=======
import { productAbi } from "../../abi/abis";

const AddProduct = ({ web3, account, update, exit }) => {
  const ProductContract = new web3.eth.Contract(
    productAbi,
    constants.contractAddress.Product
  );
>>>>>>> 8546506fa18d035c5aab98b4bd4cac422eef52ff

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qtyInStock, setQtyInStock] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const gas = await ProductContract.methods
        .addProduct(name, price, qtyInStock)
        .estimateGas();
      const result = await ProductContract.methods
        .addProduct(name, price, qtyInStock)
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
        <div className="form-group">
          <input
            name="price"
            type="int"
            onChange={(t) => setPrice(t.target.value)}
            className="form-control"
            placeholder="Product Price"
          />
        </div>
        <div className="form-group">
          <input
            name="qtyInStock"
            type="int"
            onChange={(t) => setQtyInStock(t.target.value)}
            className="form-control"
            placeholder="Product Price"
          />
        </div>
        <button type="submit" className="btn btn-primary" >Add Product</button>
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
