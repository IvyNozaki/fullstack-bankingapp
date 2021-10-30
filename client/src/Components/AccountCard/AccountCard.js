import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AccountCard.module.css";

const AccountCard = ({ id, acctName, balance }) => {
  const [deposit_url, setDeposit_Url] = useState("");
  const [withdraw_url, setWithdraw_Url] = useState("");

  useEffect(() => {
    setDeposit_Url("/profile/account/deposit/" + id);

    setWithdraw_Url("/profile/account/withdraw/" + id);
  }, [id])
  
  return (
    <div className={styles["account-card"]}>
      <h2>{acctName}</h2>
      <p>{`$${balance}`}</p>
      <Link to={deposit_url}>
        <button className="main-btn">
          Deposit
        </button>
      </Link>
      <Link to={withdraw_url}>
        <button className="main-btn">
          Withdraw
        </button>
      </Link>
      <button className="main-btn closeacct-btn">CLOSE ACCOUNT</button>
    </div>
  )
};

export default AccountCard;
