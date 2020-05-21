import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableContainer,
  TableBody,
  Paper,
} from "@material-ui/core";
import "./dealer.css";
import StatusUpdate from "../../components/commons/StatusUpdate";
import { orderAbi } from "../../abi/order.abi";
import { constants } from "../../config";
import { productAbi } from "../../abi/product.abi";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  table: {
    minWidth: 650,
  },
}));

const DealerOrders = ({ web3, account }) => {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  function epochToTime(e) {
    const d = new Date(0);
    d.setUTCMilliseconds(e);
    return d;
  }

  useEffect(() => {
    const ProductContract = new web3.eth.Contract(
      productAbi,
      constants.contractAddress.Product
    );
    async function getData() {
      const Products = [];
      const resultProd = await ProductContract.methods
        .getTotalProducts()
        .call();
      for (let i = 1; i < resultProd; i++) {
        const product = await ProductContract.methods.getProduct(i).call();
        Products.push(product);
      }
      setProducts(Products);
    }
    getData();
  }, [setProducts, web3.eth.Contract]);

  useEffect(() => {
    const OrderContract = new web3.eth.Contract(
      orderAbi,
      constants.contractAddress.Order
    );
    async function getData() {
      const Orders = [];
      const result = await OrderContract.methods.getTotalOrders().call();
      for (let i = 1; i < result; i++) {
        const order = await OrderContract.methods.getUser(i).call();
        if (order[2] === account) {
          order.id = i;
          order.product = products[order[0] - 1];
          Orders.push(order);
        }
      }
      setOrders(Orders);
    }
    getData();
  }, [setOrders, account, products, web3.eth.Contract]);

  return (
    <>
      <div style={{ margin: 30, marginBottom: 100 }}>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Order ID</StyledTableCell>
                <StyledTableCell align="right">Product</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Created At</StyledTableCell>
                <StyledTableCell align="right">Updated At</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <StyledTableRow key={order.id}>
                  <StyledTableCell>{order.id}</StyledTableCell>
                  <StyledTableCell align="right">
                    {order.product}
                  </StyledTableCell>
                  <StyledTableCell align="right">{order[1]}</StyledTableCell>
                  <StyledTableCell align="right">{order[5]}</StyledTableCell>
                  <StyledTableCell align="right">
                    <StatusUpdate status={order[6]} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {epochToTime(order[8])}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {epochToTime(order[9])}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

DealerOrders.propTypes = {
  web3: PropTypes.object,
};

export default DealerOrders;
