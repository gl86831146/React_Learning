import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/DashBoard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/Fans";
import Follow from "../pages/dashboard/Follow";

import Login from "../pages/Login";
import Book from "../pages/Book";

import NavBar from "../components/NavBar";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<WithNavbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Fans />} />
            <Route path="fans" element={<Fans />} />
            <Route path="follow" element={<Follow />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
const WithNavbar = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);
export default AppRoutes;
