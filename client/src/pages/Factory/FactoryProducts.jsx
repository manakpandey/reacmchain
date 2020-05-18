import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./factory.css";
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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { constants } from "../../config";
import { userAbi } from "../../abi/abis";
import AddDealer from "../../components/forms/AddDealer";

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

const FactoryProducts = ({ web3, account }) => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const UserContract = new web3.eth.Contract(
    //   userAbi,
    //   constants.contractAddress.User
    // );
    // -------Change This-----------
    // async function getDealers() {
    //   const Dealers = [];
    //   const result = await UserContract.methods.getTotalUsers().call();
    //   for (let i = 0; i < result; i++) {
    //     const user = await UserContract.methods.getUserByIndex(i).call();
    //     if (user[1] === "3") {
    //       Dealers.push(user);
    //     }
    //   }
    //   setDealers(Dealers);
    // }
    // getDealers();
  }, [setProducts]);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container-factory-content">
        <div style={{ marginTop: 30, marginBottom: 100 }}>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>PID</StyledTableCell>
                  <StyledTableCell align="right">
                    Name
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Price (per unit)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((dealer) => (
                  <StyledTableRow key={dealer[3]}>
                    <StyledTableCell>{dealer[0]}</StyledTableCell>
                    <StyledTableCell align="right">{dealer[2]}</StyledTableCell>
                    <StyledTableCell align="right">{dealer[3]}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
          <Fab
            color="primary"
            aria-label="add"
            variant="extended"
            style={{ margin: 10, backgroundColor: "#000000" }}
            onClick={handleOpen}
          >
            <AiOutlinePlus size={24} className={classes.extendedIcon} />
            Add Product
          </Fab>
          <Fab
            color="secondary"
            aria-label="edit"
            variant="extended"
            style={{ margin: 10 }}
          >
            <MdEdit size={24} className={classes.extendedIcon} />
            Edit Product
          </Fab>
        </div>
      </div>

      <Modal
        aria-labelledby="add-dealer"
        aria-describedby="add-dealer-form"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              {/* Change this */}
            <AddDealer web3={web3} account={account} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

FactoryProducts.propTypes = {
  web3: PropTypes.object,
  account: PropTypes.string,
};

export default FactoryProducts;
