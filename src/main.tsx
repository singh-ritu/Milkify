import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Registration from "./Login/Registration";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Found</div>,
  },
  {
    path: "/login",
    element: <Registration />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
