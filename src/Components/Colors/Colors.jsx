import React from "react";
import TitleOption from "../TitleOption/TitleOption";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Color.module.css";
import { setColor } from "../../store/ProductSlice";

const Colors = () => {
  const colors = useSelector((state) => state.Product.color);
  const selectedItem = useSelector((state) => state.Product.selectedItem.color);
  const dispatch = useDispatch();

  function switchColor(e) {
    dispatch(setColor(e.target.textContent));
  }

  const ItemColor = colors.map((el, index) => {
    return (
      <div
        onClick={switchColor}
        key={index}
        className={`${styles.itemColor} ${
          el.title === selectedItem && styles.addBackgroud
        }`}
      >
        <img src={el.img} alt="Mobile Color" />
        <span>{el.title}</span>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <TitleOption>Availble color</TitleOption>
      <div className={styles.colorItemContainer}>{ItemColor}</div>
    </div>
  );
};

export default Colors;
