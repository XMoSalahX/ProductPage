import React from "react";
import styles from "./cardToggle.module.css";
import { ReactComponent as Card } from "../../assets/Bag.svg";
import { useSelector } from "react-redux";

export default function CardToggle() {
  const numberOfItems = useSelector((state) => state.Home.numberOFItemInCard);

  return (
    <div className={styles.container}>
      <Card className={styles.bag} />
      <div className={styles.numberOfItems}>
        {numberOfItems > 9 ? "9+" : numberOfItems}
      </div>
    </div>
  );
}
