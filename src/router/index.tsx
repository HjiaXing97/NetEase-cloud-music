import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "src/views/Home/index.jsx";

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />
  }
];

export default routes;
