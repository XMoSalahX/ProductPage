import React from "react";
import styles from "./TitleOptions.module.css";

const TitleOption = ({ children }) => {
  return <div className={styles.optionTitle}>{children}</div>;
};

export default TitleOption;
