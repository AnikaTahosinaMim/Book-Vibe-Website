import { Component } from "react";
import { createBrowserRouter } from "react-router";
import MainlayOut from "../layOut/MainlayOut";
import HomePage from "../Page/HomePage";
import Bookspage from "../Page/Bookspage";
import Errorpage from "../Page/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    children: [
      { index: true, Component: HomePage },
      { path: "/books", Component: Bookspage },
    ],
    errorElement:<Errorpage></Errorpage>
  },
]);
