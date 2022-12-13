import React, { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import discoverChildren from "./discover";

const Discover = lazy(() => import("src/views/Discover"));
const Focus = lazy(() => import("src/views/Focus"));
const DownLoad = lazy(() => import("src/views/DownLoad"));
const Mine = lazy(() => import("src/views/Mine"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to='/discover' />
  },
  {
    path: "/discover",
    element: <Discover />,
    children: discoverChildren
  },
  {
    path: "/focus",
    element: <Focus />
  },
  {
    path: "/mine",
    element: <Mine />
  },
  {
    path: "/download",
    element: <DownLoad />
  }
];

export default routes;
