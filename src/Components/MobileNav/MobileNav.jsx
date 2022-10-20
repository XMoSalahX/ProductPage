import React from "react";
import styles from "./MobileNav.module.css";
import Filter from "../Filter/Filter";
import Logo from "../Logo/Logo";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "../../store/HomeSlice";
import NavLinks from "../NavLinks/NavLinks";

const MobileNav = () => {
  const dispatch = useDispatch();

  function close() {
    dispatch(toggleMobileNav(false));
  }

  return (
    <div className={styles.container}>
      <div className={styles.navHead}>
        <Logo />
        <div className={styles.close} onClick={close}></div>
      </div>
      <Filter small={true} />
      <NavLinks small={true} />
    </div>
  );
};

export default MobileNav;
