import { Outlet } from "react-router-dom";
import { AsideBar } from "../../../components/AsideBar/AsideBar";
import styles from "./SharedLayout.module.css";
// import { useMediaQuery } from "react-responsive";

export const SharedLayout = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  // const [showOnMobile, setShowOnMobile] = useState(false);

  return (
    <div className={styles.container}>
      <AsideBar />
      <main>
        <div className={styles.outlet__wrapper}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
