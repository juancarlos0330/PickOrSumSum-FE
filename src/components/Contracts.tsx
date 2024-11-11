import React from "react";
import styles from "../assets/scss/contract.module.scss";
import AuditImg from "../assets/png/audit.png";
import ContractTextImg from "../assets/png/contracttext.png";
import ContractAddressImg from "../assets/png/contractaddress.png";
import EmailTextImg from "../assets/png/emailtext.png";
import EmailAddressImg from "../assets/png/emailaddress.png";
import HeartImg from "../assets/png/heart.png";
import HeartTextImg from "../assets/png/hearttext.png";

const Contracts = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <a href="#" target="_blank">
          <img src={AuditImg} alt="audit" className={styles.auditimg} />
        </a>
        <img
          src={ContractTextImg}
          alt="contract"
          className={styles.contracttextimg}
        />
        <a href="https://etherscan.io/" target="_blank">
          <img
            src={ContractAddressImg}
            alt="contract address"
            className={styles.contractaddressimg}
          />
        </a>
        <img
          src={EmailTextImg}
          alt="Email Text"
          className={styles.emailtextimg}
        />
        <a href="mailto:Pickles@PickOrSumSum.com">
          <img
            src={EmailAddressImg}
            alt="Email Address"
            className={styles.emailaddressimg}
          />
        </a>
        <div className={styles.heartImgView}>
          <img src={HeartImg} alt="heart" />
        </div>
        <div className={styles.heartTextImgView}>
          <img src={HeartTextImg} alt="heart" />
        </div>
      </div>
    </div>
  );
};

export default Contracts;
