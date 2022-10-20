import styles from "./NavList.module.css";
import NavLinks from "../NavLinks/NavLinks";
import CardToggle from "../Card&toggle/Card&toggle";
import { toggleMobileNav } from "../../store/HomeSlice";
import { useDispatch } from "react-redux";

const NavList = () => {
  const dispatch = useDispatch(true);

  function displayMenu() {
    dispatch(toggleMobileNav(true));
  }

  return (
    <div className={styles.container}>
      <NavLinks />
      <CardToggle />
      <div className={styles.menu} onClick={displayMenu}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavList;
