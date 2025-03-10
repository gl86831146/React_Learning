import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import "../../App.css";

const DashBoard = () => {
  const location = useLocation();
  const { username, age } = location.state || {};
  return (
    <div>
      <h1>DashBoard</h1>
      <h2>
        Welcome:{username} age:{age}
      </h2>
      <nav>
        <NavLink to="profile" activeClassName="active">
          profile
        </NavLink>
        <NavLink to="setting" activeClassName="active">
          setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashBoard;
