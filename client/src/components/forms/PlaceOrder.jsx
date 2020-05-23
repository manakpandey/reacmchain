import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { constants } from "../../config";
import { orderAbi } from "../../abi/order.abi";
import { productAbi } from "../../abi/product.abi";

const PlaceOrder = ({ web3, account }) => {
  const OrderContract = new web3.eth.Contract(
    orderAbi,
    constants.contractAddress.Order
  );
  const ProductContract = new web3.eth.Contract(
    productAbi,
    constants.contractAddress.Product
  );

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [qty, setQty] = useState("");

  useEffect(() => {
    async function getProducts() {
      const Products = [];
      const result = await ProductContract.methods.getTotalProducts().call();
      for (let i = 1; i <= result; i++) {
        const product = await ProductContract.methods.getProduct(i).call();
        product.id = i;
        Products.push(product);
      }
      setProducts(Products);
    }
    getProducts();
  }, [setProducts, ProductContract]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedProduct);
    try {
      const timestamp = Date.now();
      const amt = products[selectedProduct - 1][1] * qty;
      console.log(amt);
      const gas = await OrderContract.methods
        .placeOrder(selectedProduct, qty, "0x01", amt, 2, timestamp)
        .estimateGas();
      const result = await OrderContract.methods
        .placeOrder(selectedProduct, qty, "0x01", amt, 2, timestamp)
        .send({
          from: account,
          gas,
        });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="form-group">
        <select
          className="form-control"
          onChange={(t) => setSelectedProduct(t.target.value)}
        >
          <option aria-label="None" value="" />
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {`${product[0]} (${product[1]})`}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <input
          type="number"
          name="qty"
          onChange={(t) => setQty(t.target.value)}
          className="form-control"
          placeholder={`Quantity`}
        />
      </div>
      <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
        Place Order
      </button>
    </div>
  );
};

PlaceOrder.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
};

export default PlaceOrder;
