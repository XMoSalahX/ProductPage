import React from "react";
import styles from "./Product.module.css";
import Slider from "../../Components/Slider/Slider";
import Content from "../../Components/Content/Content";

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <Slider />
      <Content />
    </div>
  );
};

export default Product;
