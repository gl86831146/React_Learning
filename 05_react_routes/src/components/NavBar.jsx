import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #dee2e6",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about?name=John&age=30"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/book/123"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Book
        </NavLink>
        <NavLink
          to="/blog/1"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          BlogDetail
        </NavLink>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {user ? (
          <>
            <span style={{ color: "#666" }}>欢迎，{user.name}</span>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#1890ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              {user.name.charAt(0)}
            </div>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
