import React from "react";
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
} from "@material-ui/core";
import { AiOutlinePlus } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const FactoryDealers = ({ web3 }) => {
  const classes = useStyles();

  return (
    <div className='container-factory-content'>
    <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Contact Person</TableCell>
              <TableCell align="right">Contact Number</TableCell>
              <TableCell align="right">Wallet Address</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <div style={{position:'absolute', bottom:10, alignSelf:'center'}}>
        <Fab
          color="primary"
          aria-label="add"
          variant="extended"
          style={{ margin: 10, backgroundColor: "#000000" }}
        >
          <AiOutlinePlus size={24} className={classes.extendedIcon} />
          Add Dealers
        </Fab>
        <Fab
          color="secondary"
          aria-label="edit"
          variant="extended"
          style={{ margin: 10 }}
        >
          <MdEdit size={24} className={classes.extendedIcon} />
          Edit Dealers
        </Fab>
      </div>
    </div>
  );
};

FactoryDealers.propTypes = {
  web3: PropTypes.object,
};

export default FactoryDealers;
