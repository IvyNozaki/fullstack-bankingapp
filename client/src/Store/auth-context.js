import React, { useState, createContext } from "react";

const AuthContext = createContext({
  isAuth: false,
  isLoggedIn: false,
  userData: {},
  setUserInfo: () => {},
  onCreateAcct: () => {},
  onTransact: () => {},
  onCloseAcct: () => {},
  onCheck: () => {},
  onAuth: () => {},
  onLogin: () => {},
  onSignup: () => {},
  onLogout: () => {},
  onGlLogin: () => {},
  onGLSignup: () => {},
  onCreateReview: () => {}
});

export const AuthProvider = ({ children }) => {
  const existingAuth = Boolean(localStorage.getItem("isAuth") || "");
  const existingLogin = Boolean(localStorage.getItem("isLoggedIn") || "");
  const existingUserData = JSON.parse(localStorage.getItem("userData")) || {};
  
  // State
  const [ isAuth, setIsAuth ] = useState(existingAuth);
  const [ isLoggedIn, setIsLoggedIn ] = useState(existingLogin);
  const [ userData, setUserData ] = useState(existingUserData);
  
  // Login Handler
  const loginHandler = async (email, password) => {
    try {
      const result = await fetch("https://ivynozaki-piggybank.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      })
      
      const data = await result.json();

      if (data.message !== "Incorrect email/password") {
        setIsAuth(true);
        setIsLoggedIn(true);
        setUserData(prevState => ({
          ...prevState,
          ...data
        }));
        
        localStorage.setItem("isLoggedIn", 1);
        localStorage.setItem("isAuth", 1);
        localStorage.setItem("userID", data["_id"]);
        localStorage.setItem("userData", JSON.stringify(data));

        return { login: "success" }
      }

      return { login: "error" }
     
    } catch (err) {
      console.log("From auth:", err);
    }
  };

  // Set is auth handler
  const authHandler = () => {
    setIsAuth(true);
  };

  // Sign up handler
  const signUpHandler = async (email, password, username) => {
    try {
      const result = await fetch("https://ivynozaki-piggybank.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, username }),
        headers: { "Content-Type": "application/json" }
      })
      
      const data = await result.json();

      console.log(data);

      if (data.message !== "That email has already been registered.") {
        setIsAuth(true);
        setIsLoggedIn(true);
        setUserData(prevState => ({
          ...prevState,
          ...data
        }));
        localStorage.setItem("isLoggedIn", 1);
        localStorage.setItem("isAuth", 1);
        localStorage.setItem("userID", data["_id"]);
        
        return { signup: "success" }
      }
      
      return { signup: "error" }
    } catch (err) {
      console.log(err);
    }
  }
  
  // Logout Handler
  const logoutHandler = async () => {
    try {
      const response = await fetch("https://ivynozaki-piggybank.herokuapp.com/logout");

      const data = await response.json();

      console.log(data);

      setIsAuth(false);
      setIsLoggedIn(false);
      setUserData({});
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("userID");
      localStorage.removeItem("userData");
    } catch (err) {
      console.log(err);
    }
  };
  
  // Get User Info
  const getUserInfo = async () => {
    try {
      const response = await fetch("https://ivynozaki-piggybank.herokuapp.com/profile");
      
      const data = await response.json();
  
      if (data.isAuth) {
        setIsAuth(true);
        setIsLoggedIn(true);
        setUserData(prevState => ({
          ...prevState,
          data
        }))
      }
    } catch (err) {
      console.log(err);
    }

    return userData;
  };

  // Set User Info
  const setUserInfo = (data) => {
    setUserData(prevState => ({
      ...prevState,
      ...data
    }));
  };
  
  // Create Account
  const createAcctHandler = async (acctName, balance, id) => {
    try {
      const result = await fetch("https://ivynozaki-piggybank.herokuapp.com/account/open", {
        method: "POST",
        body: JSON.stringify({ acctName, balance, id }),
        headers: { "Content-Type": "application/json" }
      })
      
      const data = await result.json();
      
      setUserData(prevState => ({
        ...prevState,
        ...data
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Google login
  const googleLoginHandler = async (email, password) => {
    try {
      const result = await fetch("https://ivynozaki-piggybank.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      })
      
      const data = await result.json();
      
      setIsAuth(true);
      setIsLoggedIn(true);
      setUserData(prevState => ({
        ...prevState,
        ...data
      }));
      localStorage.setItem("isLoggedIn", 1);
      localStorage.setItem("isAuth", 1);
      localStorage.setItem("userID", data["_id"]);
    } catch (err) {
      console.log(err);
    }
  };

  // Google Signup
  const googleSignupHandler = async (email, password, username) => {
    try {
      const result = await fetch("https://ivynozaki-piggybank.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, username }),
        headers: { "Content-Type": "application/json" }
      })
      
      const data = await result.json();
      
      setIsAuth(true);
      setIsLoggedIn(true);
      setUserData(prevState => ({
        ...prevState,
        ...data
      }));
      localStorage.setItem("isLoggedIn", 1);
      localStorage.setItem("isAuth", 1);
      localStorage.setItem("userID", data["_id"]);
    } catch (err) {
      console.log(err);
    }
  };

  // Deposit and Withdraw action
  const transactionHandler = async (amount, tranType, acctID, id) => {
    let transPath = "https://ivynozaki-piggybank.herokuapp.com/account/" + tranType.toLowerCase();
    
    try {
      const result = await fetch(transPath, {
        method: "POST",
        body: JSON.stringify({ amount, acctID, id }),
        headers: { "Content-Type": "application/json" }
      })
      
      const data = await result.json();
      
      setIsAuth(true);
      setIsLoggedIn(true);
      setUserData(prevState => ({
        ...prevState,
        ...data
      }));

      localStorage.setItem("isLoggedIn", 1);
      localStorage.setItem("isAuth", 1);
      localStorage.setItem("userID", data["_id"]);
    } catch (err) {
      console.log(err);
    }
  };
  
  // Closing an account
  const closeAcctHandler = async (acctID, id) => {
    try {
      const result = await fetch("https://ivynozaki-piggybank.herokuapp.com/account/close", {
        method: "POST",
        body: JSON.stringify({ acctID, id }),
        headers: { "Content-Type": "application/json" }
      })
      
      const data = await result.json();
      
      setIsAuth(true);
      setIsLoggedIn(true);
      setUserData(prevState => ({
        ...prevState,
        ...data
      }));

      localStorage.setItem("isLoggedIn", 1);
      localStorage.setItem("isAuth", 1);
      localStorage.setItem("userID", data["_id"]);
    } catch (err) {
      console.log(err);
    }
  };

  // Create new Review
  const reviewHandler = async (revName, title, message) => {
    try {
      const result = await fetch("https://ivynozaki-piggybank.herokuapp.com/reviews", {
        method: "POST",
        body: JSON.stringify({ revName, title, message }),
        headers: { "Content-Type": "application/json" }
      })
      
      const data = await result.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const authContextValue = {
    isAuth: isAuth,
    isLoggedIn: isLoggedIn,
    userData: userData,
    setUserInfo: setUserInfo,
    onCreateAcct: createAcctHandler,
    onTransact: transactionHandler,
    onCloseAcct: closeAcctHandler,
    onCheck: getUserInfo,
    onAuth: authHandler,
    onLogin: loginHandler,
    onSignup: signUpHandler,
    onLogout: logoutHandler,
    onGlLogin: googleLoginHandler,
    onGLSignup: googleSignupHandler,
    onCreateReview: reviewHandler
  };
  
  return (
    <AuthContext.Provider 
      value={authContextValue}
    >
      { children }
    </AuthContext.Provider>
  )
};

export default AuthContext;