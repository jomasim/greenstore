import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/SearchSharp";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import ShoppingBasket from "@material-ui/icons/ShoppingBasketOutlined";
import MenuItem from "@material-ui/core/MenuItem";
import "./appbar.css";

export default function ButtonAppBar() {
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
          <MenuItem className="menu-item active">Home</MenuItem>
          <MenuItem className="menu-item" >Market</MenuItem>
          <MenuItem className="menu-item" >Profiler</MenuItem>
          <MenuItem className="menu-item" >Explore</MenuItem>
          <div className="menu-right">
            <IconButton edge="end" color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>{" "}
            |
            <IconButton edge="end" color="inherit" aria-label="search">
              <Badge color="error" badgeContent="2">
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
