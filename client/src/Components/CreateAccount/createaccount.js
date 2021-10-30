import React, { useState, useContext } from "react";
import AuthContext from "../../Store/auth-context";
import { useHistory } from "react-router-dom";
import styles from "./CreateAccount.module.css";

const CreateAcct = () => {
  const [acctName, setAcctName] = useState("");
  const [balance, setBalance] = useState(0);

  const contextData = useContext(AuthContext);
  
  let history = useHistory();

  const acctNameInput = (e) => {
    setAcctName(e.target.value);
  };
  
  const balanceInput = (e) => {
    setBalance(e.target.value);
  };
  
  const handleAcctOpen = (e) => {
    e.preventDefault();
    
    contextData.onCreateAcct(acctName, balance, localStorage.getItem("userID"));

    setAcctName("");
    setBalance("");
    history.push("/profile");
  };

  return (
    <form onSubmit={handleAcctOpen} className={styles["ca"]}>
      <h1>Open a new account:</h1>
      <div className={styles["field-box"]}>
        <label htmlFor="account-name">Account Name:</label>
        <input 
          type="text" 
          name="account-name" 
          value={acctName}
          onChange={acctNameInput}
          autoComplete="off"
          required
        />
      </div>
      
      <div className={styles["field-box"]}>
        <label htmlFor="balance">Balance:</label>
        <input 
          type="number" 
          name="balance" 
          value={balance}
          onChange={balanceInput}
          autoComplete="off"
          min="0"
          step=".01"
          required
        />
      </div>

      <input 
        type="submit" 
        value="Create Account" 
      />
    </form>
  )
};

export default CreateAcct;