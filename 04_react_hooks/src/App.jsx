import React from "react";

// function useCustomHook(value) {
//   useDebugValue(value ? "Active" : "Inactive");
//   return value;
// }

// function useApi(url) {
//   const [data, setData] = useState(null);
//   useDebugValue(data ? "Data Loaded" : "Loading");
//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, [url]);
//   return data;
// }

import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import Time from "./components/Time";
import Weather from "./components/Weather";
import Form from "./components/Form";
import { UserProvider } from "./components/UserContext";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import UserStatus from "./components/UserStatus";
import Counter from "./components/Counter";

import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import UserPage from "./components/UserPage";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import ListFilerParent from "./components/ListFilterParent";
import Parent from "./components/Parent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import PreviousValue from "./components/PreviousValue";
import FocusInput from "./components/FocusInput";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import ComponentSize from "./components/ComponentSize";
import AnimateBox from "./components/AnimateBox";
import Data from "./components/Data";
import Search from "./components/Search";
const App = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };
  // const [isActive, setIsActive] = useState(false);
  // useCustomHook(isActive);
  // const data = useApi("https://api.xygeng.cn/one");
  // if (!data) return <p>加载中...</p>;
  return (
    <>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <Time /> */}
      {/* <Weather /> */}
      {/* <Form /> */}
      {/* <Counter /> */}
      {/* <UserProvider>
        <div>
          <h1>登录系统</h1>
          <UserStatus />
          <LoginForm />
          <LogoutButton />
        </div>
      </UserProvider> */}

      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
      {/* <UserPage /> */}
      {/* <ExpensiveCalculationParent /> */}
      {/* <ListFilerParent /> */}
      {/* <Parent /> */}
      {/* <ExpensiveComponentParent /> */}
      {/* <PreviousValue /> */}
      {/* <FocusInput /> */}
      {/* <Parent1 /> */}
      {/* <Parent2 /> */}
      {/* <ComponentSize /> */}
      {/* <AnimateBox /> */}
      {/* <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"}
      </button> */}
      {/* <div>
        <h2>{data.content}</h2>
        <p>来源：{data.origin}</p>
        <p>作者：{data.name}</p>
        <p>标签：{data.tag}</p>
      </div> */}
      {/* <Data /> */}
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </>
  );
};

export default App;
