import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import AppRoutes from "./routes";
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
