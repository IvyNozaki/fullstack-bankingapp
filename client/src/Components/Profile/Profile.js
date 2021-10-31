import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import addbtn from '../../assets/plus.png';
import AccountCard from "../AccountCard/AccountCard";
import styles from "./Profile.module.css";
import "../Home/Home.css";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const contextData = useContext(AuthContext);
  
  useEffect(() => {
    setUsername(contextData.userData.username);
    setUserInfo(contextData.userData);
  }, [contextData])
  
  return (
    <>
      {username &&
        <div>
          <div className="secondary-card dashboard">
            <h1>{`Welcome ${username}!`}</h1>
            <h2>{`Total Funds: $${userInfo.totalBalance}`}</h2>
            <p>Let's go and play with what you've got!</p>
          </div>

          <div className="secondary-card account-list">
            {userInfo.accounts.map(acct => {
              return (
                <AccountCard 
                  key={acct["_id"]}
                  id={acct["_id"]}
                  acctName={acct.acctName}
                  balance={acct.balance}
                />
                )
              }
            )}
            
            <Link to="/profile/account/create">
              <div className="mini-card account-card"> 
              <acronym title="Add Account">
                <img src={addbtn} className="add-btn" alt="" />
              </acronym>
              </div>
            </Link>
          
          </div>
          
          <div className="secondary-card dashboard-end">
            <h1>Check out your benefits</h1>
            <button className={styles["main-btn"]}>CARDS</button>
            <button className={styles["main-btn"]}>CREDIT</button>
            <button className={styles["main-btn"]}>FETCH</button>
            <p>Tell us what you think about PiggyBank 
              <Link to="/review" style={{fontWeight: "bold", opacity: "70%"}}> here</Link>.
            </p>
          </div>
        </div>
      }
    </>
  )
};

export default Profile;