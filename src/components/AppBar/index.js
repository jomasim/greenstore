import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/SearchSharp";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import ShoppingBasket from "@material-ui/icons/ShoppingBasketOutlined";
import logo from "../../../src/assets/images/logo.svg";
import MenuItem from "@material-ui/core/MenuItem";
import "./appbar.css";

export default function ButtonAppBar({ itemCount }) {
  return (
    <div>
      <AppBar position="fixed" className="menu">
        <Toolbar>
          <IconButton
            edge="start"
            className="toggle-btn"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className="menu-items">
            <img src={logo} alt="store" className="logo"></img>
            <MenuItem className="menu-item active">Home</MenuItem>
            <MenuItem className="menu-item">Market</MenuItem>
            <MenuItem className="menu-item">Profile</MenuItem>
            <MenuItem className="menu-item">Explore</MenuItem>
            <div className="menu-right">
              <IconButton edge="end" color="inherit" aria-label="search">
                <SearchIcon />
              </IconButton>{" "}
              |
              <IconButton edge="end" color="inherit" aria-label="search">
                <Badge color="secondary" className="badge-count" badgeContent={itemCount}>
                  <ShoppingBasket />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
