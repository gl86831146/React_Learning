import UserProfile from "./UserProfile";
import { useState } from "react";

const UserPage = () => {
  const [user, setUser] = useState({ name: "zhangsan", age: 20 });
  const onAgeChange = () => {
    setUser((user) => ({
      ...user,
      age: user.age + 1,
    }));
  };
  return (
    <>
      <UserProfile name={user.name} age={user.age} onAgeChange={onAgeChange} />
    </>
  );
};

export default UserPage;
