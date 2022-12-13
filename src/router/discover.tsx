import React, { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Recommend = lazy(
  () => import("src/views/Discover/child-views/Recommend/Recommend")
);
const Ranking = lazy(
  () => import("src/views/Discover/child-views/Ranking/Ranking")
);
const Songs = lazy(() => import("src/views/Discover/child-views/Songs/Songs"));
const DjRadio = lazy(
  () => import("src/views/Discover/child-views/DjRadio/DjRadio")
);
const Album = lazy(() => import("src/views/Discover/child-views/Album/Album"));
const Artist = lazy(
  () => import("src/views/Discover/child-views/Artist/Artist")
);
const routes: RouteObject[] = [
  {
    path: "/discover",
    element: <Navigate to={"/discover/recommend"} />
  },
  {
    path: "/discover/recommend",
    element: <Recommend />
  },
  {
    path: "/discover/ranking",
    element: <Ranking />
  },
  {
    path: "/discover/songs",
    element: <Songs />
  },
  {
    path: "/discover/djRadio",
    element: <DjRadio />
  },
  {
    path: "/discover/album",
    element: <Album />
  },
  {
    path: "/discover/artist",
    element: <Artist />
  }
];

export default routes;
