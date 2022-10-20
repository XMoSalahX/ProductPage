import React from "react";
import styles from "./Packages.module.css";
import { useSelector } from "react-redux";
import { formatter } from "../../Hooks/formater";

const Packages = () => {
  const packagesFromStore = useSelector((state) => state.Product.packages);

  const packages = packagesFromStore.map((data, index) => {
    return (
      <div className={styles.packageHolder} key={index}>
        <div className={styles.range}>
          {data.from}
          {data.to ? " -" : "+"} {data.to} Pieces
        </div>
        <div className={styles.Price}>{formatter.format(data.price)}</div>
      </div>
    );
  });

  return <div className={styles.container}>{packages}</div>;
};

export default Packages;
