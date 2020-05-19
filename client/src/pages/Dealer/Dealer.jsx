import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/SidebarDealer";
import "./dealer.css";
import PlaceOrder from "../../components/forms/PlaceOrder";
import DealerOrders from "./DealerOrders";
import { Typography } from "@material-ui/core";

const Dealer = ({ web3, account }) => {
  const [activeSection, setActiveSection] = useState(0);

  const Content = () => {
    switch (activeSection) {
      case 1:
        return (
          <>
            <Typography variant="h5">Place Order</Typography>
            <PlaceOrder />
          </>
        );

      default:
        return (
          <>
            <Typography variant="h5">Dashboard</Typography>
            <DealerOrders web3={web3} />
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

Dealer.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
};

export default Dealer;
