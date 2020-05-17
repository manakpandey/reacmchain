import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/Sidebar";
import AppBar from "../../components/header/Header";
import "./factoryHome.css";
import AddDealer from "../../components/forms/AddDealer";
import PlaceOrder from "../../components/forms/PlaceOrder";

const FactoryHome = ({ web3 }) => {
  const [activeSection, setActiveSection] = useState(1);

  const Content = () => {
    switch (activeSection) {
      case 1:
        return <PlaceOrder web3={web3}/>;
      case 4:
        return <AddDealer web3={web3} />;

      default:
        return <div />
    }
  };

  return (
    <div className="container-factory">
      <div className="sidebar">
        <Sidebar nav={setActiveSection}/>
      </div>
      <div className="content">
        <AppBar title="Dashboard" />
        <Content />
      </div>
    </div>
  );
};

FactoryHome.propTypes = {
  web3: PropTypes.object,
};

export default FactoryHome;
