import React, { useState } from "react";
import PropTypes from "prop-types";
import { constants } from "../../config";
import { rawProductAbi } from "../../abi/rawProduct.abi";

const AddProduct = ({ web3, account, update, exit, products }) => {
  const RawProductContract = new web3.eth.Contract(
    rawProductAbi,
    constants.contractAddress.RawProduct
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qtyInStock, setQtyInStock] = useState(0);
  const [rawProducts, setrawProducts] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const gas = await ProductContract.methods
    //     .addProduct(name, price, qtyInStock, rawProducts)
    //     .estimateGas();
    //   const result = await ProductContract.methods
    //     .addProduct(name, price, qtyInStock, rawProducts)
    //     .send({
    //       from: account,
    //       gas,
    //     });
    //   console.log(result);
    //   update();
    //   exit();
    // } catch (e) {
    //   console.log(e);
    // }
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
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Products
              </label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
  update: PropTypes.func,
  exit: PropTypes.func,
  products: PropTypes.array,
};

export default AddProduct;
