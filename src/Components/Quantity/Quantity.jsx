import React from "react";
import styles from "./Quantity.module.css";
import TitleOption from "../TitleOption/TitleOption";
import { useSelector, useDispatch } from "react-redux";
import { formatter } from "../../Hooks/formater";
import { decrement, increment } from "../../store/ProductSlice";

const Quantity = () => {
  const deviceCost = useSelector(
    (state) => state.Product.selectedItem.deviceCost
  );
  const numberOfItems = useSelector(
    (state) => state.Product.selectedItem.numberOFItems
  );
  const dispatch = useDispatch();

  function decrementHandeler() {
    dispatch(decrement());
  }

  function incrementHandeler() {
    dispatch(increment());
  }

  return (
    <div className={styles.container}>
      <div className={styles.QuantityHeader}>
        <TitleOption>Quantity</TitleOption>
        <span className={styles.cost}>{formatter.format(deviceCost)}</span>
      </div>
      <div className={styles.counters}>
        <div className={styles.counter}>
          <div className={styles.decrement} onClick={decrementHandeler}></div>
          <div className={styles.increment} onClick={incrementHandeler}></div>
        </div>
        <div className={styles.counterText}>{numberOfItems} Pieces</div>
      </div>
    </div>
  );
};

export default Quantity;
