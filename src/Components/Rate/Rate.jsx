import React from "react";
import styles from "./Rate.module.css";
import { useSelector } from "react-redux";
import IMgGroup from "../ImgGroup/IMgGroup";
import star from "../../assets/Star.png";

const Rate = () => {
  const productCode = useSelector((state) => state.Product.productCode);
  const customerRateNumber = useSelector(
    (state) => state.Product.customerRateNumber
  );
  const rate = useSelector((state) => state.Product.rate);

  let numberOFSars = Math.round(rate);

  let data = [];

  while (numberOFSars > 0) {
    numberOFSars--;
    data.push(star);
  }
  return (
    <div className={styles.SerialAndRateContainer}>
      <div className={styles.serial}>
        <span className={styles.Serial}>Product Code: &nbsp;</span>
        <span className={styles.Serial}>{productCode} </span>
      </div>
      <div className={styles.rate}>
        <div className={styles.stars}>
          <IMgGroup data={data} rate={rate} width={"20px"} height={"20px"} />
        </div>
        <div className={styles.CustomerRate}>
          <span className={styles.rateSpan}>{rate}</span>
          <span className={styles.rateNumber}>({customerRateNumber})</span>
        </div>
      </div>
    </div>
  );
};

export default Rate;
