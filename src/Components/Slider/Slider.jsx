import React from "react";
import styles from "./Slider.module.css";
import { useSelector } from "react-redux";
import IMgGroup from "../ImgGroup/IMgGroup";

const Slider = () => {
  const mainPoster = useSelector((state) => state.Product.mainImg.Poster);
  const subPoster = useSelector((state) => state.Product.mainImg.subPoster);

  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img src={mainPoster} alt="Main Poster" />
      </div>
      <div className={styles.subImgsContainer}>
        <IMgGroup data={subPoster} width={"122px"} />
      </div>
    </div>
  );
};

export default Slider;
