import React from "react";
import styles from "./Storage.module.css";
import TitleOption from "../TitleOption/TitleOption";
import { useSelector, useDispatch } from "react-redux";
import { setStorage } from "../../store/ProductSlice";

const Storage = () => {
  const storageSizes = useSelector((state) => state.Product.storage);
  const SelectedStorage = useSelector(
    (state) => state.Product.selectedItem.storage
  );
  const dispatch = useDispatch();

  function ChangeSorage(e) {
    dispatch(setStorage(Number(e.target.textContent.replace(/\D/g, ""))));
  }

  const storageItems = storageSizes.map((data, index) => {
    return (
      <div
        onClick={ChangeSorage}
        key={index}
        className={`${styles.storageItem} ${
          data === SelectedStorage && styles.addBackground
        }`}
      >
        {data} <span>GB</span>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <TitleOption>Storage capacity</TitleOption>
      <div className={styles.sizesContainer}>{storageItems}</div>
    </div>
  );
};

export default Storage;
