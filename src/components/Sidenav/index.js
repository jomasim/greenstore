import React from "react";
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import './sidenav.css';

const Sidenav = () => (
  <div className="sidenav-container">
    <span className="sidenav-title">Categories</span>
    <ul className="menu-list">
      <li>Horticulture <NavigateNextIcon/> </li>
      <li>Aquaculture <NavigateNextIcon/> </li>
    </ul>
  </div>
);
export default Sidenav;
