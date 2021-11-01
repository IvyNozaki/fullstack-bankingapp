import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";

// Components
import Home from "../Home/Home";
import Services from "../Services/services";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Signup from "../Signup/Signup"
import CreateAcct from "../CreateAccount/CreateAccount"
import TransactionForm from "../TransactionForm/TransactionForm";
import CloseAccount from "../CloseAccount/CloseAccount";
import ReviewForm from "../Review/ReviewForm";

// Router
import { Route, Switch, Link, useHistory } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

// images
import profileicon from '../../assets/profile.icon.svg';
import logouticon from '../../assets/logout.icon.svg';
import styles from "./Nav.module.css";

const Nav = () => {
  const contextData = useContext(AuthContext);
  
  let history = useHistory();
  
  const handleLogOut = () => {
    contextData.onLogout();
    
    history.push("/");
  };
  
  return (
    <div className="App">
      <header className="header-container">
        <Link to="/">
          <h1 className="bank-title">PiggyBank</h1>
        </Link>

        <div className="nav-container">
          
          {contextData.isAuth &&
            <div className="navbar-container">
              <div className="usernav-link">
                <button>
                  <Link to="/profile">
                    <acronym title="Profile">
                      <img src={profileicon} className="usernav-icons" alt="piggybank background"/>
                    </acronym>
                  </Link>
                </button>
                {contextData.userData.username}
              </div>
              <div className="usernav-link">
                <button onClick={handleLogOut}>
                  <acronym title="Logout">
                    <img src={logouticon} className="usernav-icons" alt="logouticon"/>
                  </acronym>
                </button>
              </div>
            </div>}
          
          {!contextData.isAuth &&
          <div className="navbar-container">
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Sign up
            </Link>
          </div>
          }

        </div>
      </header>
      
      <div className={styles["maincard"]}>
        <Switch>
          <Route path="/" exact
            component={Home}
          />
          <Route path="/services" exact
            component={Services}
          />
          <PrivateRoute path="/profile" exact
            component={Profile}
          />
          <Route path="/login" exact
            component={Login}
          />
          <Route path="/signup" exact
            component={Signup}
          />
          <PrivateRoute path="/profile/account/create" exact
            component={CreateAcct}
          />
          <PrivateRoute path="/profile/account/withdraw" exact
            component={TransactionForm}
          />
          <PrivateRoute path="/profile/account/withdraw/:id" exact
            component={TransactionForm}
          />
          <PrivateRoute path="/profile/account/deposit" exact
            component={TransactionForm}
          />
          <PrivateRoute path="/profile/account/deposit/:id" exact
            component={TransactionForm}
          />
          <PrivateRoute path="/profile/account/close" exact
            component={CloseAccount}
          />
          <PrivateRoute path="/profile/account/close/:id" exact
            component={CloseAccount}
          />
          <Route path="/review" exact
            component={ReviewForm}
          />
        </Switch>
      </div>
    </div>
  )
};

export default Nav;