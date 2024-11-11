import React from "react";
import styles from "../assets/scss/coin.module.scss";
import PowerImg from "../assets/png/power.png";
import RainbowImg from "../assets/png/rainbow.png";
import SumcoinImg from "../assets/png/sumcoin.png";
import TwitterImg from "../assets/png/twitter.png";
import TelegramImg from "../assets/png/telegram.png";
import TwitterHoverImg from "../assets/png/twitter_hover.png";
import TelegramHoverImg from "../assets/png/telegram_hover.png";

const Coins = () => {
  return (
    <div className={styles.main}>
      <img src={PowerImg} className={styles.powerimg} alt="power" />
      <img src={RainbowImg} className={styles.rainbowimg} alt="rainbow" />
      <img src={SumcoinImg} className={styles.sumcoinimg} alt="sum coin" />
      <a
        href="https://twitter.com/PickOrSumSum"
        target="_blank"
        className={styles.twitterImgView}
      >
        <img src={TwitterImg} alt="twitter" />
        <img src={TwitterHoverImg} alt="twitter hover" />
      </a>
      <a
        href="https://t.me/sumsumportal"
        target="_blank"
        className={styles.telegramImgView}
      >
        <img src={TelegramImg} alt="telegram" />
        <img src={TelegramHoverImg} alt="telegram hover" />
      </a>
    </div>
  );
};

export default Coins;
