import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "../pages";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default MyRoutes;
