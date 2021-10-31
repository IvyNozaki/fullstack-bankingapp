import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import styles from "./CloseAccount.module.css";

const CloseAccount = () => {
  const [acctID, setAcctID] = useState("");
  const [acctName, setAcctName] = useState("");
  const [balance, setBalance] = useState(0);
  // const [showSuccess, setShowSuccess] = useState(false);
  
  const { id } = useParams();
  let history = useHistory();

  const contextData = useContext(AuthContext);

  const handleClose = e => {
    e.preventDefault();
    console.log("close account");
    console.table({ acctID, acctName, balance });
    contextData.onCloseAcct(acctID, localStorage.getItem("userID"));
    history.push("/profile");
  }

  const handleGoBack = e => {
    e.preventDefault();
    history.push("/profile");
    console.log("go back");
  }

  useEffect(() => {
    setAcctID(id);
   
    const findAcctInfo = () => {
      let acct = contextData.userData["accounts"].find(item => item["_id"] === id);

      setBalance(acct.balance);

      setAcctName(acct.acctName);
    }

    findAcctInfo();
  }, [id, contextData])
  
  return (
    <form className={styles["ca"]}>
      <h1>Close account</h1>
      <h2>Are you sure you want to close the following account? </h2>
      <h3>{`Account: ${acctName}`}</h3>
      <h3>{`Balance: $${balance}`}</h3>

      <input 
        type="submit" 
        className={styles["close"]}
        value="Yes, I want to close this account" 
        onClick={handleClose}
      />

      <input 
        type="submit" 
        value="No, take me back to my profile" 
        className={styles["cancel"]}
        onClick={handleGoBack}
      />
    </form>
  )
};

export default CloseAccount;