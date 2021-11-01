import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation, useHistory, Link } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import styles from "./TransactionForm.module.css";
// import { Default } from 'react-awesome-spinners'
import depositgif from "../../assets/deposit.gif";
import spin from "../../assets/depositspin.gif";
import withdrawing from "../../assets/withdrawing.gif";
import withdrawn from "../../assets/withdrawn.gif";


const TransactionForm = () => {
  const [acctID, setAcctID] = useState("");
  const [tranType, setTranType] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [notValid, setNotValid] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("Depositing...");
  const [imgSrc, setImgSrc] = useState(spin);
  
  const { id } = useParams();
  const location = useLocation();

  const contextData = useContext(AuthContext);

  useEffect(() => {
    setAcctID(id);
    
    const findTranType = () => {
      if (location.pathname.search("deposit") !== -1) {
        setTranType("Deposit")
      }
      
      if (location.pathname.search("withdraw") !== -1) {
        setTranType("Withdraw")
      }
    }
    
    findTranType();

    const findBal = () => {
      let acct = contextData.userData["accounts"].find(item => item["_id"] === id);

      setBalance(acct.balance);
    }

    findBal();
  }, [id, location, contextData])
  
  let history = useHistory();

  const clearState = () => {
    setAcctID("");
    setTranType("");
    setAmount(0);
    setBalance(0);
    setErrorMsg("");
    setNotValid(false);
    setShowSuccess(false);
  }
  
  const amountInput = (e) => {
    setAmount(e.target.value);
    setNotValid(false);
    setErrorMsg("");
  };
  
  const handleTransation = (e) => {
    e.preventDefault();
    
    if (tranType === "Withdraw" && amount > balance) {
      setErrorMsg("Not enough funds in account");
      setNotValid(true);
    } else {
      contextData.onTransact(amount, tranType, acctID, localStorage.getItem("userID"));

      if (tranType === "Withdraw") {
        setImgSrc(withdrawing);
        setSuccessMsg("Withdrawing...")
        setShowSuccess(true);
        setTimeout(() => {
          setSuccessMsg("Complete!");
          setImgSrc(withdrawn);
        }, 2500);
      } else if (tranType === "Deposit") {
        setShowSuccess(true);
        setTimeout(() => {
          setSuccessMsg("Complete!");
          setImgSrc(depositgif);
        }, 2500);
      }
      
      setTimeout(() => {
        clearState();
        history.push("/profile");
      }, 5000);
    }
  };
  
  return (
    <>
    {!showSuccess &&
    <form onSubmit={handleTransation} className={styles["ca"]}>
      <div className={styles["close-btn"]}>
        <acronym title="close window">
          <Link to="/profile">&#215;</Link>
        </acronym>
      </div>
      <h1>{tranType}</h1>
      
      <h3>{`Current Balance: $${balance}`}</h3>
      <div className={styles["field-box"]}>
        <label htmlFor="amount">Amount:</label>
        <input 
          type="number" 
          name="amount" 
          value={amount}
          onChange={amountInput}
          autoComplete="off"
          min="0"
          step=".01"
          required
        />
      </div>

      <p>{errorMsg}</p>
      
      <input 
        type="submit" 
        value="Submit"
        disabled={notValid}
      />
    </form>
    }
    
    {showSuccess && 
      <div className={styles["success"]}>
        <h1>{successMsg}</h1>
        <img src={imgSrc} alt="" />
      </div>
    }
    </>
  )
};

export default TransactionForm;