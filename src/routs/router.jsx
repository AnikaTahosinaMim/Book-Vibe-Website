import { Component } from "react";
import { createBrowserRouter } from "react-router";
import MainlayOut from "../layOut/MainlayOut";
import HomePage from "../Page/HomePage";
import Bookspage from "../Page/Bookspage";
import Errorpage from "../Page/Errorpage";
import Bookdatails from "../Page/Bookdatails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    children: [
      { index: true, Component: HomePage },
      { path: "/books", Component: Bookspage },
      {
        path: "/bookdatails/:id",
        Component: Bookdatails,
        loader: ()=>fetch("/booksData.json"),
      },
    ],
    errorElement: <Errorpage></Errorpage>,
  },
]);
