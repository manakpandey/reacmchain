import React, { useState } from "react";
import "./factory.css";
import SalesGraph from "../../components/salesgraph/salesgraph";
import PChart from "../../components/piechart/piechart"
import InventoryTable from "../../components/inventorytable/inventorytable"


const FactoryDashboard = () => {
    return (
        <div class="dashboard-container">
            <div class="salesgraph">
                <SalesGraph />
            </div>
            <div class="piechart-and-table-container">
                <div class="invtable">
                    <InventoryTable />
                </div>
                <div class="piechart">
                    <PChart />
                </div>
            </div>
        </div>
    );
}

export default FactoryDashboard;