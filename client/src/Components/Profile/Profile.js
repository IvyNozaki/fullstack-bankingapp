import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import addbtn from '../../assets/plus.png'
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
    <div>
      {userInfo && console.log(userInfo)}
      <div className="secondary-card dashboard">
        <h1>{`Welcome ${username}!`}</h1>
        <h2>{`Total Funds: $${userInfo.totalBalance}`}</h2>
        <p>Let's go and play with what you've got!</p>
      </div>
      
      <div className="secondary-card account-list">
        <div className="mini-card account-card">
          <h2>Acccount Name</h2>
          <p>$Balance</p>
          <button className="main-btn">DEPOSIT</button>
          <button className="main-btn">WITHDRAW</button>
          <button className="main-btn closeacct-btn">CLOSE ACCOUNT</button>
        </div>
        
        <div className="mini-card account-card"> 
          <Link to="/profile/account/create">
          <acronym title="Add Account">
            <img src={addbtn} className="add-btn" alt="" />
          </acronym>
          </Link>
        </div>
      </div>

      <div className="secondary-card dashboard-end">
        <h1>Check out your benefits</h1>
        <button className="main-btn">CARDS</button>
        <button className="main-btn">CREDIT</button>
        <button className="main-btn">FETCH</button>
        <p>Tell us what you really think about Piggy Bank 
          <Link to="/" style={{fontWeight: "bold", opacity: "70%"}}>here</Link>.
        </p>
      </div>
    </div>
  );
}

export default Profile;