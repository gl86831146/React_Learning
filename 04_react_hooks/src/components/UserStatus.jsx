import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserStatus = () => {
  const { user } = useContext(UserContext);

  return <div>{user ? <p>欢迎, {user}!</p> : <p>请登录.</p>}</div>;
};

export default UserStatus;
