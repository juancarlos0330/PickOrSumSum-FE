import React from "react";
import styles from "../assets/scss/app.module.scss";
import Coins from "./Coins";
import Buys from "./Buys";
import Contracts from "./Contracts";

const App = () => {
  return (
    <div className={styles.homePage}>
      <Coins />
      <Buys />
      <Contracts />
    </div>
  );
};

export default App;
