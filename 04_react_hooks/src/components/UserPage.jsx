import UserProfile from "./UserProfile";
import { UserContext } from "../context/UserContext";

const UserPage = () => {
  const user = { name: "zhangsan" };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
};

export default UserPage;
