import userIcon from "../../assets/userIcon.svg";
import styles from "./UserLogo.module.css";

export const UserLogo = () => {
  return (
    <div className={styles.aside__user__wrapper}>
      <img src={userIcon} width={42} height={42} />
      <div>
        <h3 className={styles.aside__user__title}>Evano</h3>
        <p className={styles.aside__user__text}>Project Manager</p>
      </div>
    </div>
  );
};
