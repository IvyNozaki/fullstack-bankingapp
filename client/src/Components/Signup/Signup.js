import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import styles from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  let history = useHistory();

  const contextData = useContext(AuthContext);

  useEffect(() => {
    if (contextData.isAuth) {
      history.push("/profile");
    }
  }, [history, contextData.isAuth])

  const usernameInput = (e) => {
    setUsername(e.target.value);
  };

  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  
  const passwordInput = (e) => {
    setPassword(e.target.value);
  }
  
  const handleSignup = (e) => {
    e.preventDefault();
    contextData.onSignup(email, password, username);
    setEmail('');
    setPassword('');
    setUsername("");
  };

  return (
    <form onSubmit={handleSignup} className={styles.signup}>
      <h1>SIGN UP</h1>
      <div className={styles["field-box"]}>
        <label htmlFor="username">NAME:</label>
        <input 
          type="text" 
          name="username"
          value={username}
          onChange={usernameInput}
          autoComplete="off"
          required
        />
      </div>

      <div className={styles["field-box"]}>
        <label htmlFor="email">EMAIL:</label>
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={emailInput}
          autoComplete="off"
          required
        />
      </div>
      
      <div className={styles["field-box"]}>
        <label htmlFor="password">PASSWORD:</label>
        <input 
          type="password" 
          name="password" 
          value={password}
          onChange={passwordInput}
          autoComplete="off"
          required
        />
      </div>
      
      <label className={styles["form-control"]}>
        <input type="checkbox" name="checkbox" required/>
        Agree to Terms & Conditions
       </label>

      <input 
        className="submit-btn" 
        type="submit" 
        value="SUBMIT" 
      />

      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  )
};

export default Signup;