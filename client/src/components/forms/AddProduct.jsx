import React, { useState } from "react";
import PropTypes from "prop-types";
import { constants } from "../../config";
import { userAbi } from "../../abi/abis";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = e =>{
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={e=>handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            onChange={t=>setName(t.target.value)}
            className="form-control"
            placeholder="Product Name"
          />
        </div>
        <div className="form-group">
          <input
            name="price"
            type="int"
            onChange={t=>setPrice(t.target.value)}
            className="form-control"
            placeholder="Product Price"
          />
        </div>

        <input type="submit" value="Add Product" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddProduct;
