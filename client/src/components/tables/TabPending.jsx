import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//import "./factory.css";
import {
  Fab,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";
import { AiOutlinePlus } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { constants } from "../../config";
import { userAbi } from "../../abi/abis";
import AddDealer from "../../components/forms/AddDealer";
import { FcBadDecision } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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

const StatusUpdate = ({ status }) => {
  switch (status) {
    case 0:
      return (
        <>
          <FcCancel size={20} style={{padding:2}}/>
          Cancelled
        </>
      );
    case 1:
      return (
        <>
          <FcBadDecision size={20} />
          Placed
        </>
      );
    case 2:
      return (
        <>
          <FcOk size={20} />
          Accepted
        </>
      );
    case 3:
      return (
        <>
          <FcShipped size={20} />
          Shipped
        </>
      );
    case 4:
      return (
        <>
          <FcApproval size={20} />
          Recieved
        </>
      );

    default:
      return <div />;
  }
};

const TabPending = ({ web3, account }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const orders = [
    {
      oid: 1,
      dealer: "asdf",
      date: "5/20/2020",
      pname: "soap",
      quantity: 100,
      amount: 5000,
      status: 0,
    },
  ];

  return (
    <div>
    <div className="container-factory-content">
      <div style={{ margin: 30, marginBottom: 100 }}>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>OrderID</StyledTableCell>
                <StyledTableCell align="right">Dealer</StyledTableCell>
                <StyledTableCell align="right">Date of order</StyledTableCell>
                <StyledTableCell align="right">Product Name</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Amount paid</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <StyledTableRow key={order.oid}>
                  <StyledTableCell>{order.oid}</StyledTableCell>
                  <StyledTableCell align="right">
                    {order.dealer}
                  </StyledTableCell>
                  <StyledTableCell align="right">{order.date}</StyledTableCell>
                  <StyledTableCell align="right">{order.pname}</StyledTableCell>
                  <StyledTableCell align="right">
                    {order.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {order.amount}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <StatusUpdate status={order.status} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    <div align="right">
    <Fab
            color="secondary"
            aria-label="edit"
            variant="extended"
            style={{ margin: 10 }}
          >
            <MdEdit size={24}  />
            Update Status
          </Fab>
          </div>
          </div>

  );
};

TabPending.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
};

export default TabPending;
