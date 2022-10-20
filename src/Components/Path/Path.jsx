import React from "react";
import styles from "./Path.module.css";
import { useSelector } from "react-redux";

const Path = () => {
  const route = useSelector((state) => state.Home.routes);
  return (
    <div className={styles.path}>
      {route.name.map((el, index) => {
        return (
          <span
            key={el}
            style={{
              cursor: "pointer",
            }}
          >
            {el} {route.name[index + 1] && ` > `} &nbsp;
          </span>
        );
      })}
    </div>
  );
};

export default Path;
