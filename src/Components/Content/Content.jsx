import React from "react";
import styles from "./Content.module.css";
import Title from "../Title/Title";
import { useSelector } from "react-redux";
import Rate from "../Rate/Rate";
import Packages from "../Packages/Packages";
import Colors from "../Colors/Colors";
import Storage from "../Storage/Storage";
import Quantity from "../Quantity/Quantity";
import Shipping from "../Shipping/Shipping";
import TotalSubmit from "../Total&Submit/Total&Submit";

const Content = () => {
  const title = useSelector((state) => state.Product.title);

  return (
    <div className={styles.container}>
      <Title>{title}</Title>
      <Rate />
      <Packages />
      <Colors />
      <Storage />
      <Quantity />
      <Shipping />
      <TotalSubmit />
    </div>
  );
};

export default Content;
