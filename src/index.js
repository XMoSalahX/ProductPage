import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home/Home";
import { Provider } from "react-redux";
import store from "./store/index";
import Product from "./Routes/Product/Product";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Home />
      </Provider>
    ),
    children: [
      {
        path: "product",
        element: <Product />,
      },
    ],
    errorElement: <div>Page Not Found!</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}></RouterProvider>);

reportWebVitals();
