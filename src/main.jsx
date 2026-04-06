import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import MainlayOut from "./layOut/MainlayOut";
import HomePage from "./Page/HomePage";
import Bookspage from "./Page/Bookspage";
import { router } from "./routs/router";
import BookContext from "./context/BookContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookContext>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </BookContext>
  </StrictMode>,
);
