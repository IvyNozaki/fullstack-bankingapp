import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import { GoogleLogin } from "react-google-login";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();
  
  const contextData = useContext(AuthContext);
  
  useEffect(() => {
    if (contextData.isAuth) {;
      history.push("/profile");
    }
  }, [history, contextData])

  const emailInput = (e) => {
    setEmail(e.target.value);
  };
  
  const passwordInput = (e) => {
    setPassword(e.target.value);
  }
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    contextData.onLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const googleSuccess = async (res) => {
    console.log(res);
    const email = res?.profileObj.email;
    const password = res?.tokenId;
    
    try {
      const response = await contextData.onGlLogin(email, password);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const googleFailure = (err) => console.log("Google sign in was not successful.", err);

  return (
    <form onSubmit={handleLogin} className={styles["login"]}>
      <h1>Login</h1>
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
      
      <input 
        className="submit-btn" 
        type="submit" 
        value="SUBMIT" 
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

      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      
    </form>
    );
}

export default Login;