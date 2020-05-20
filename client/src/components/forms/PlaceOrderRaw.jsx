import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { constants } from "../../config";
import { rawProductAbi } from "../../abi/rawProduct.abi";
import { mappingAbi } from "../../abi/mapping.abi";
import { userAbi } from "../../abi/user.abi";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const PlaceOrderRaw = ({ web3, account, update, exit }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [mapping, setMapping] = useState([]);
  const [selectedProduct, selectProduct] = useState(0);
  const [qty, setQty] = useState(0);
  const [supplierList, setSupplierList] = useState([]);
  const [selectedSupplier, setSupplier] = useState("");

  const RawProductContract = new web3.eth.Contract(
    rawProductAbi,
    constants.contractAddress.RawProduct
  );
  const MappingContract = new web3.eth.Contract(
    mappingAbi,
    constants.contractAddress.Mapping
  );
  const UserContract = new web3.eth.Contract(
    userAbi,
    constants.contractAddress.User
  );

  useEffect(() => {
    async function getAllRawProducts() {
      const RawProducts = [];
      const result = await RawProductContract.methods.getTotalProducts().call();
      for (let i = 1; i <= result; i++) {
        const rp = await RawProductContract.methods.getProduct(i).call();
        RawProducts.push({
          id: i,
          name: rp,
        });
      }
      setProducts(RawProducts);
    }
    async function getAllSuppliersAndMappings() {
      const Suppliers = [];
      const result = await UserContract.methods.getTotalUsers().call();
      for (let i = 0; i < result; i++) {
        const user = await UserContract.methods.getUserByIndex(i).call();
        if (user[1] === "1") {
          Suppliers.push(user);
        }
      }
      setSuppliers(Suppliers);
      const mapsNum = await MappingContract.methods
        .getTotalSRPMappings()
        .call();
      const Maps = [];
      for (let i = 1; i <= mapsNum; i++) {
        const mapping = await MappingContract.methods.getSRPMapping(i);
        Maps.push(mapping);
      }
      setMapping(Maps);
    }
    getAllRawProducts();
    getAllSuppliersAndMappings();
  }, [
    setMapping,
    setProducts,
    setSuppliers,
    MappingContract.methods,
    RawProductContract.methods,
    UserContract.methods,
  ]);

  async function filterSuppliers() {
    const Suppliers = [];
    mapping.forEach((e) => {
      if (e[1] === selectedProduct) Suppliers.push({ sid: e[0], price: e[2] });
    });
    const SupplierList = [];
    Suppliers.forEach((e) => {
      const details = suppliers.filter((supplier) => supplier[3] === e.sid);
      SupplierList.push({ sid: e.sid, name: details[0], price: e.price });
    });
    setSupplierList(SupplierList);
  }

  const handleProductInput = (t) => {
    selectProduct(t.target.value);
    filterSuppliers();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedProduct + qty + selectedSupplier);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          onChange={handleProductInput}
          inputProps={{
            name: "supplier",
            id: "supplier",
          }}
        >
          <option aria-label="None" value="" />
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          onChange={(t) => setSupplier(t.target.value)}
          inputProps={{
            name: "supplier",
            id: "supplier",
          }}
        >
          <option aria-label="None" value="" />
          {supplierList.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
      <div className="form-group">
        <input
          type="int"
          name="qty"
          onChange={(t) => setQty(t.target.value)}
          className="form-control"
          id="qtyInput"
          placeholder="Quantity"
        />
      </div>
      </FormControl>
      

      <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
        Place Order
      </button>
    </div>
  );
};

PlaceOrderRaw.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
  update: PropTypes.func,
  exit: PropTypes.func,
};

export default PlaceOrderRaw;
