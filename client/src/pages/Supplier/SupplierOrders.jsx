import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Supplier.css";
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
import TabPending from "../../components/tables/TabPending";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
      >
        <Tab label="Pending Orders" {...a11yProps(0)} />
        {/* <Tab label="Order History
          " {...a11yProps(1)} /> */}
      </Tabs>

      <TabPanel value={value} index={0}>
        <TabPending />
      </TabPanel>

      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel> */}
    </div>

    // <Modal
    // aria-labelledby="place-order"
    // aria-describedby="place-order-form"
    // className={classes.modal}
    // open={open}
    // onClose={handleClose}
    // closeAfterTransition
    // BackdropComponent={Backdrop}
    // BackdropProps={{
    //   timeout: 500,
    // }}
    // >
    // <Fade in={open}>
    //   <div className={classes.paper}>
    //     <AddDealer web3={web3} account={account} />
    //   </div>
    // </Fade>
    // </Modal>
  );
}
