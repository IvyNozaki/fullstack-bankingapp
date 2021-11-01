import React, { useState, useContext } from "react";
import AuthContext from "../../Store/auth-context";
import { useHistory, Link } from "react-router-dom";
import styles from "./CreateAccount.module.css";
import { Default } from "react-awesome-spinners";

const CreateAcct = () => {
  const [acctName, setAcctName] = useState("");
  const [balance, setBalance] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

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
    setShowSuccess(true);
    setSuccessMsg("New Piggy adopted");
    contextData.onCreateAcct(acctName, balance, localStorage.getItem("userID"));
    
    setTimeout(() => {
      history.push("/profile");
    }, 3000);
  };

  return (
    <>
    {!showSuccess &&
    <form onSubmit={handleAcctOpen} className={styles["ca"]}>
        <div className={styles["x-btn"]}>
        <acronym title="close window">
          <Link to="/profile">&#215;</Link>
        </acronym>
      </div>
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
    }
    
    {showSuccess &&
      <div className={styles["success"]}>
        <h1>{successMsg}</h1>
        <Default />
      </div>
    }
    </>
  )
};

export default CreateAcct;