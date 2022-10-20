import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Filter from "../Filter/Filter";
import NavList from "../NavList/NavList";

const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <Logo />
      <Filter />
      <NavList />
    </div>
  );
};

export default Header;
