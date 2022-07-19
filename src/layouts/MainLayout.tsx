import React from "react";

import Sidebar from "../components/common/Sidebar";

import styles from "./MainLayout.module.scss";
import Home from "../pages/Home";

// type Props = {
//   children: React.ReactNode;
// };

const MainLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Home />
      </div>
    </div>
  );
};

export default MainLayout;
