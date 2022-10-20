import { ReactComponent as BrandLogo } from "../../assets/Logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <BrandLogo className={styles.logosvg} />
    </div>
  );
};

export default Logo;
