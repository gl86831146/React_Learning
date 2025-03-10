import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import "../../App.css";
const Profile = () => {
  return (
    <div className="page-container">
      <h1>Profile Page</h1>
      <div className="profile-layout">
        <nav className="sub-nav">
          <NavLink to="fans" activeClassName="active">
            fans
          </NavLink>
          <NavLink to="follow" activeClassName="active">
            follow
          </NavLink>
        </nav>
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
