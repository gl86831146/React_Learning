import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LogoutButton = () => {
  const { user, logout } = useContext(UserContext);

  if (!user) {
    return null;
  }

  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
