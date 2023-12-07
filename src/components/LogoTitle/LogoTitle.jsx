import titleLogo from "../../assets/titleLogo.svg";
import styles from "./LogTitle.module.css";

export const LogoTitle = () => {
  return (
    <img
      className={styles.customers__logo}
      src={titleLogo}
      alt="title logo"
      width={176}
      height={36}
    />
  );
};
