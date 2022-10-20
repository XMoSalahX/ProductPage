import React from "react";
import styles from "./ImgGroup.module.css";

const IMgGroup = ({ data, width, height }) => {
  return data.map((data, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className={styles.imgSizing}
          src={data}
          alt="SubPoster"
          style={{
            maxWidth: width,
            height: height ? height : "106px",
            display: "flex",
            alignItems: "center",
          }}
        />
      </div>
    );
  });
};

export default IMgGroup;
