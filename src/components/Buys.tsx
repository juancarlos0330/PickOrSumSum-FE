import React from "react";
import styles from "../assets/scss/buy.module.scss";
import FlyingImg from "../assets/png/flying.png";
import ArrowUpImg from "../assets/png/arrowup.png";
import PressImg from "../assets/png/press.png";
import DescriptionImg from "../assets/png/description.png";

const Buys = () => {
  return (
    <div className={styles.main}>
      <div className={styles.flyingImgView}>
        <img src={FlyingImg} alt="fly" />
      </div>
      <a
        href="https://www.dextools.io/"
        target="_blank"
        className={styles.buyCursor}
      ></a>
      <div className={styles.arrowupImgView}>
        <img src={ArrowUpImg} alt="arrowUp" />
      </div>
      <div className={styles.pressImgView}>
        <img src={PressImg} alt="press buy" />
      </div>
      <div className={styles.descImgView}>
        <img src={DescriptionImg} alt="description" />
      </div>
    </div>
  );
};

export default Buys;
