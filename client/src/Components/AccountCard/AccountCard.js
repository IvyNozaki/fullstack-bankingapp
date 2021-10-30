import React from "react";
import styles from "./AccountCard.module.css";

const AccountCard = ({ id, acctName, balance }) => {
  return (
    <div className={styles["account-card"]}>
      <h2>{acctName}</h2>
      <p>{`$${balance}`}</p>
      <button className="main-btn">DEPOSIT</button>
      <button className="main-btn">WITHDRAW</button>
      <button className="main-btn closeacct-btn">CLOSE ACCOUNT</button>
    </div>
  )
};

export default AccountCard;
