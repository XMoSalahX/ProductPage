import React from "react";
import styles from "./NavLinks.module.css";
import { navListData } from "../../static/StaticData";
import { Link } from "react-router-dom";

const NavLinks = ({ small }) => {
  return (
    <ul className={`${styles.NavLinks}  ${small && styles.mbileSize}`}>
      {navListData.map((data, index) => {
        return (
          <li key={index}>
            <Link to={data.path}>{data.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
