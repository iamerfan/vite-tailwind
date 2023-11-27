import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

const Routes = [
  { path: "/", element: <App /> },
  { path: "/about", element: <>About</> },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(Routes)} />
  </React.StrictMode>,
);
