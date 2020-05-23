import React, { useState } from "react";
import PropTypes from "prop-types";
import { constants } from "../../config";
import { productAbi } from "../../abi/product.abi";
//import AddProductDropdown from "./AddProductDropdown";

const AddProduct = ({ web3, account, update, exit }) => {
  const ProductContract = new web3.eth.Contract(
    productAbi,
    constants.contractAddress.Product
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qtyInStock, setQtyInStock] = useState(0);
  const [rawProducts, setrawProducts]= useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const gas = await ProductContract.methods
        .addProduct(name, price, qtyInStock, rawProducts)
        .estimateGas();
      const result = await ProductContract.methods
        .addProduct(name, price, qtyInStock, rawProducts)
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
            name="price"
            type="int"
            onChange={(t) => setPrice(t.target.value)}
            className="form-control"
            placeholder="Product Price"
          />
        </div>
        
        
        <div className="form-group">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01" multiple>
    {/* <option selected>Choose Raw Products</option> */}
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
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
