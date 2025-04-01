import aviaSalesLogo from "./assets/Logos/Logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <img src={aviaSalesLogo} alt="Aviasales logo" className={styles.Logo} />
  );
};

export default Logo;
