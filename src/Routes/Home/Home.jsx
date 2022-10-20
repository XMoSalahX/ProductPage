import React from "react";
import styles from "./Home.module.css";
import Header from "../../Components/Header/Header";
import Path from "../../Components/Path/Path";
import { useSelector } from "react-redux";
import MobileNav from "../../Components/MobileNav/MobileNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  const homeNavVlaue = useSelector((state) => state.Home.homeNav);

  return (
    <div className={styles.homecontainer}>
      {homeNavVlaue && <MobileNav />}
      <Header />
      <Path />
      <Outlet />
    </div>
  );
};

export default Home;
