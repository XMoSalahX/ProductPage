import { configureStore } from "@reduxjs/toolkit";
import Home from "./HomeSlice";
import Product from "./ProductSlice";

export default configureStore({
  reducer: { Home, Product },
});
