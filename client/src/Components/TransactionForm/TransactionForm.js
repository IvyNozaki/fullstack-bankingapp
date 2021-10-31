import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import styles from "./TransactionForm.module.css";
import { Default } from 'react-awesome-spinners'

const TransactionForm = () => {
  const [acctID, setAcctID] = useState("");
  const [tranType, setTranType] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [notValid, setNotValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
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
    } 

    if (!notValid) {
      contextData.onTransact(amount, tranType, acctID, localStorage.getItem("userID"));
      setShowSuccess(true);

      setTimeout(() => {
        clearState();
        history.push("/profile");
      }, 1500);
    }
  };
  
  return (
    <>
    {!showSuccess &&
    <form onSubmit={handleTransation} className={styles["ca"]}>
      <h1>{tranType}</h1>
      <h3>{`Current Balance: $${balance}`}</h3>
      <div className={notValid ? styles["warning"] : styles["field-box"]}>
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
      />
    </form>
    }
    
    {showSuccess && 
      <>
        <h1>{`${tranType} Successful!`}</h1>
        <Default 
          color={"#b7d7ff80"}
        />
      </>
    }
    </>
  )
};

export default TransactionForm;