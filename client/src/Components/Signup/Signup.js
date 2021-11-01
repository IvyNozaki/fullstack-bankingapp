import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import styles from "./Signup.module.css";
import { GoogleLogin } from "react-google-login";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errMsg, setErrMsg] = useState("");
  const [showErr, setShowErr] = useState(false);
  
  let history = useHistory();

  const contextData = useContext(AuthContext);

  const clearState = () => {
    setEmail('');
    setPassword('');
    setUsername('');
  };
  
  useEffect(() => {
    if (contextData.isAuth) {
      history.push("/profile");
    }
  }, [history, contextData.isAuth ])

  const usernameInput = (e) => {
    setUsername(e.target.value);
    setShowErr(false);
  };

  const emailInput = (e) => {
    setEmail(e.target.value);
    setShowErr(false);
  };
  
  const passwordInput = (e) => {
    setPassword(e.target.value);
    setShowErr(false);
  }
  
  const handleSignup = async (e) => {
    e.preventDefault();

    console.table({ email, password, username });

    const result = await contextData.onSignup(email, password, username);

    console.log("from signup", result);

    if (result.signup === "error") {
      setShowErr(true);
      setErrMsg("That email has already been registered.")
      clearState();
    }
  };

  const googleSuccess = async (res) => {
    console.log(res)
    const email = res?.profileObj.email;
    const password = res?.tokenId;
    
    let emailIndex = email.search("@");

    let username = email.substring(0, emailIndex)
    try {
      const response = await contextData.onGLSignup(email, password, username);
      
      console.log(response);
      
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  const googleFailure = (err) => console.log("Google sign in was not successful.", err);

  return (
    <>
      <form onSubmit={handleSignup} className={styles.signup}>
        <h1>Sign Up</h1>

        {showErr && <h3>{errMsg}</h3>}

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
          value="SIGN UP" 
        />
        
        <GoogleLogin
          clientId="930065850363-9u7u3v4e6pr3vd7gv7vbqde5imn2b2rj.apps.googleusercontent.com"
          render={(props) => (
            <button 
              className={styles["google-btn"]}
              onClick={props.onClick}
              disabled={props.disabled}
              >
              Sign in with Google
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={"single_host_origin"}
        />    
        
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </>
  )
};

export default Signup;