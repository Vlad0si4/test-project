import { Logo } from "../Logo/Logo";
import { NavigateLink } from "../NavigateLink/NavigateLink";
import { UserLogo } from "../../components/UserLogo/UserLogo";

import styles from "./AsideBar.module.css";

export const AsideBar = () => {
  return (
    <aside className={styles.aside}>
      <Logo />
      <NavigateLink />
      <UserLogo />
    </aside>
  );
};
