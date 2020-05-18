import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/Sidebar";
import AppBar from "../../components/header/Header";
import "./factory.css";
import PlaceOrder from "../../components/forms/PlaceOrder";
import FactoryDealers from "./FactoryDealers";
import FactorySuppliers from "./FactorySuppliers";
import FactoryProducts from "./FactoryProducts";
import { Typography } from "@material-ui/core";

const Factory = ({ web3, account }) => {
  const [activeSection, setActiveSection] = useState(4);

  const Content = () => {
    switch (activeSection) {
      case 0:
        return (
          <>
            <Typography variant='h5'>Dashboard</Typography>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant='h5'>Orders</Typography>
            <PlaceOrder web3={web3} />
          </>
        );
      case 2:
        return (
          <>
            <Typography variant='h5'>Products</Typography>
            <FactoryProducts web3={web3} account={account} />
          </>
        );
      case 3:
        return (
          <>
            <Typography variant='h5'>Dealers</Typography>
            <FactorySuppliers web3={web3} account={account} />
          </>
        );
      case 4:
        return (
          <>
            <Typography variant='h5'>Dealers</Typography>
            <FactoryDealers web3={web3} account={account} />
          </>
        );

      default:
        return <div />;
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

Factory.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
};

export default Factory;
