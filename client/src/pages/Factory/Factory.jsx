import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/Sidebar";
import AppBar from "../../components/header/Header";
import "./factory.css";
import PlaceOrder from "../../components/forms/PlaceOrder";
import FactoryDealers from "./FactoryDealers";
import FactorySuppliers from "./FactorySuppliers";
import FactoryProducts from "./FactoryProducts";
import SalesGraph from "../../components/salesgraph/salesgraph";
import PChart from "../../components/piechart/piechart"


const Factory = ({ web3, account }) => {
  const [activeSection, setActiveSection] = useState(4);

  const Content = () => {
    switch (activeSection) {
      case 0:
        return (
          <>
            <AppBar title="Dashboard" />
            <div class = "dashboard-container">
              <div class = "salesgraph">
                <SalesGraph/>
              </div>
              <div class = "piechart">
                <PChart/>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <AppBar title="Orders" />
            <PlaceOrder web3={web3} />
          </>
        );
      case 2:
        return (
          <>
            <AppBar title="Products" />
            <FactoryProducts web3={web3} account={account} />
          </>
        );
      case 3:
        return (
          <>
            <AppBar title="Suppliers" />
            <FactorySuppliers web3={web3} account={account} />
          </>
        );
      case 4:
        return (
          <>
            <AppBar title="Dealers" />
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
