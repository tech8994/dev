import React from "react";
import "./scss/index.scss";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Badge } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { Btn, Input } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import {RxDashboard} from "react-icons/rx"

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toast } from "react-toastify";

export const Navbar = () => {
  const navigate=useNavigate();
  // DropDown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // navigate("/authentication/login")
  };

  function LogoutFunc(){
    window.localStorage.removeItem("user_id");
      window.localStorage.removeItem("bed_token");
      toast.success("Logout Successfully!")
      setTimeout(() =>{
        navigate("/authentication/login")
      }, 3000)
  }
  return (
    <div className="navbar_section">
      <div className="nested_navabr_section">
        <div className="email_section">
          <a href="mailto:info@example.com">
            <MdEmail />
            info@example.com
          </a>
        </div>
        <div className="Header">
          <div className="header_section">
            <div className="logo">
              <h1>LOGO</h1>
            </div>
            <div className="Search_box">
              <Input placeholder={"search"} />
              <Btn icons={FaSearch} />
            </div>
            <div className="icons">
              <NavLink to={"/wishlist"}>
                <FaRegHeart />
              </NavLink>
              {/* <Badge badgeContent={2}  color="error"> */}
              <NavLink to={"/shopping-cart"}>
              <HiOutlineShoppingBag />
              </NavLink>
              {/* </Badge> */}
              {/* <NavLink to={"/authentication/login"}>
               <HiOutlineUser/>
               </NavLink> */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  // sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>
                    <AccountCircleIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              > 
              {localStorage.getItem("bed_token") ? (
            //  <NavLink to={"/user/profile"}>Profile</NavLink>
            <>
              <NavLink to={"/user/dashboard"}  className="link_icon"
                style={{ textDecoration: "none" }}> 
                <MenuItem>
                   <RxDashboard style={{fontSize:'22px',color: "gray"}}/> <span style={{paddingLeft: '10px',color: "black" }}>User Dashboard </span>
                 </MenuItem>
              </NavLink>
            <NavLink
                to={"/user/profile"}
                className="link_icon"
                style={{ textDecoration: "none" }}
              >
                <MenuItem>
                  <Avatar /> <span style={{ color: "black" }}>User Profile</span>
                </MenuItem>
              </NavLink>
            
              </>
              ) : (
                <NavLink
                to={"/authentication/login"}
                className="link_icon"
                style={{ textDecoration: "none" }}
              >
                <MenuItem>
                  <Avatar /> <span style={{ color: "black" }}>Login In</span>
                </MenuItem>
              </NavLink>
              )}

                {/* <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem> */}
                {/* <NavLink
                  to={"/authentication/registration"}
                  className="link_icon"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    <span style={{ color: "black" }}> Add another account</span>
                  </MenuItem>
                </NavLink> */}
                {/* <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem> */}
              {localStorage.getItem("bed_token") ? (       
                <>
                                <Divider />
                 <MenuItem onClick={LogoutFunc}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
                </>

                ) : null}
                
              </Menu>

            </div>
          </div>
        </div>
        {/* Links */}
        <div className="links_header">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/new-arrival"}>New Arrival</NavLink>
            </li>
            <li>
              <NavLink to="/building-bed">Build Your Bed</NavLink>
            </li>
            <li>
              <NavLink to="/bedding">Bedding</NavLink>
            </li>

            <li>
              <NavLink to="/table_kitchen">Tabletops & Kitchen</NavLink>
            </li>
            {/* <li>
              <NavLink to="/shop">Shop</NavLink>
            </li> */}
            <li>
              <NavLink to="/curtain">Curtains</NavLink>
            </li>
            <li>
              <NavLink to="/bath">Bath</NavLink>
            </li>
            <li>
              <NavLink to="/fabric">Fabric</NavLink>
            </li>
            <li>
              <NavLink to="/our-story">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
