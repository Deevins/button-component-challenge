import React from "react";

import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.root}>
      <a href="https://devchallenges.io/paths/front-end-developer">
        <h5>
          <span>Dev</span>challenges.io
        </h5>
      </a>
      <span>Colors</span>
      <span>Typography</span>
      <span>Spaces</span>
      <span className={styles.active}>Buttons</span>
      <span>Inputs</span>
      <span>Grid</span>
    </div>
  );
};

export default Sidebar;
