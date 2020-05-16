import React from "react";
import PropTypes from "prop-types";
import "./sidebar.css";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShop,
  AiOutlineBook,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFileBreak } from "react-icons/bs";
import { Avatar, Typography } from "@material-ui/core";

const SidebarItem = ({ icon, text, interaction }) => {
  return (
    <div className="sidebar-item" onClick={() => interaction}>
      <span className="sidebar-icon">{icon}</span>
      <div className="item-text">{text}</div>
    </div>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  interaction: PropTypes.func,
};

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <Avatar>
          <AiOutlineUser />
        </Avatar>
        <Typography
          variant="h5"
          style={{ paddingLeft: 20, paddingTop: 5, color: "#ffffff" }}
        >
          Factory
        </Typography>
      </div>
      <div className="sidebar-items">
        <SidebarItem icon={<AiOutlineHome size={24} />} text={"Dashboard"} />
        <SidebarItem icon={<AiOutlineBook size={24} />} text={"orders"} />
        <SidebarItem icon={<BsFileBreak size={24} />} text={"products"} />
        <SidebarItem
          icon={<AiOutlineShopping size={24} />}
          text={"suppliers"}
        />
        <SidebarItem icon={<AiOutlineShop size={24} />} text={"dealers"} />
      </div>    
    </div>
  );
};

export default Sidebar;
