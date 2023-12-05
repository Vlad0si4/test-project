import { Outlet } from "react-router-dom";
import { AsideBar } from "../../../components/AsideBar/AsideBar";
import styles from "./SharedLayout.module.css";

export const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <AsideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
