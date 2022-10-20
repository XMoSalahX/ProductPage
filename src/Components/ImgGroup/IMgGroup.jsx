import React from "react";
import styles from "./ImgGroup.module.css";

const IMgGroup = ({ data, width, height }) => {
  console.log(data);
  return data.map((data, index) => {
    return (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "30%",
        }}
      >
        <img
          className={styles.imgSizing}
          src={data}
          alt="SubPoster"
          style={{
            maxWidth: "100%",
            maxHeight: height ? height : "90%",
            display: "flex",
            alignItems: "center",
          }}
        />
      </div>
    );
  });
};

export default IMgGroup;
