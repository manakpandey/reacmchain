import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
import PlaceOrder from "../../components/forms/PlaceOrder";
import TabPending from "../../components/tables/TabPending";
import TabMyOrders from "../../components/tables/TabMyOrders"
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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
<>
<div>
<div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
      >
        <Tab label="Pending Orders" {...a11yProps(0)} />
        <Tab label="My Orders" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <TabPending />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TabMyOrders/>
      </TabPanel>
    </div>


        <div style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
          <Fab
            color="primary"
            aria-label="add"
            variant="extended"
            style={{ margin: 10, backgroundColor: "#000000" }}
            onClick={handleOpen}
          >
            <AiOutlinePlus size={24}  />
            Place Order
          </Fab>
          {/* <Fab
            color="secondary"
            aria-label="edit"
            variant="extended"
            style={{ margin: 10 }}
          >
            <MdEdit size={24}  />
            Update Status
          </Fab> */}
        </div>
      </div>

      <Modal
        aria-labelledby="place-order"
        aria-describedby="place-order-form"
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
              Change this
            {/* <PlaceOrder web3={web3} account={account} /> */}
          </div>
        </Fade>
      </Modal>
</>

  );
}
