import React from "react";
import styles from "./Filter.module.css";
import { ReactComponent as DropDown } from "../../assets/dropdown.svg";
import { ReactComponent as SearchIcon } from "../../assets/Search_icon.svg";

const Filter = ({ small }) => {
  return (
    <div className={`${styles.filterContainer} ${small && styles.MobileSize}`}>
      <div className={styles.filterSelecion}>
        <div
          style={{
            width: "-webkit-fill-available",
            height: "22px",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "22px",
            textAlign: "right",
            color: "var(--color-main)",
          }}
        >
          All
        </div>
        <DropDown />
      </div>
      <div className={styles.search}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search by product name or seller"
          className={styles.inputSearch}
        ></input>
      </div>
    </div>
  );
};

export default Filter;
