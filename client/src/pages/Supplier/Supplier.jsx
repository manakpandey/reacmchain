import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/SidebarSupplier";
import "./Supplier.css";
import FactoryProducts from "./SupplierProducts";
import FactoryOrders from "./SupplierOrders";
import { Typography } from "@material-ui/core";

const Supplier = ({ web3, account }) => {
  const [activeSection, setActiveSection] = useState(0);

  const Content = () => {
    switch (activeSection) {
      case 0:
        return (
          <>
            <Typography variant="h5">Dashboard</Typography>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h5">Orders</Typography>
            <FactoryOrders web3={web3} />
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5">Products</Typography>
            <FactoryProducts web3={web3} account={account} />
          </>
        );

      default:
        return (
          <>
            <Typography variant="h5">Dashboard</Typography>
          </>
        );
    }
  };

  return (
    <div className="container-factory">
      <div className="sidebar">
        <Sidebar nav={setActiveSection} />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
};

Supplier.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
};

export default Supplier;
