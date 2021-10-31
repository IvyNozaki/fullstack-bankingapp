import React, { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import styles from "./ReviewForm.module.css";

const ReviewForm = () => {
  const [revName, setRevName] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  
  let history = useHistory();
  const { pathname } = useLocation();

  const contextData = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const nameInput = (e) => {
    setRevName(e.target.value);
  };
  
  const titleInput = (e) => {
    setTitle(e.target.value);
  };
  
  const messageInput = (e) => {
    setMessage(e.target.value);
  }
  
  const handleReview = (e) => {
    e.preventDefault();

    if (!revName) setRevName("Anonymous");

    console.table({ title, message, revName });
    contextData.onCreateReview(revName, title, message)
    history.push("/profile");
  };

  return (
    <form onSubmit={handleReview} className={styles.review}>
      <h1>Leave a Review</h1>

      <div className={styles["field-box"]}>
        <label htmlFor="title">TITLE:</label>
        <input 
          type="title" 
          name="title"
          value={title}
          onChange={titleInput}
          autoComplete="off"
          required
        />
      </div>
      
      <div className={styles["message"]}>
        <label htmlFor="message">REVIEW:</label>
        <textarea 
          type="message" 
          name="message" 
          value={message}
          onChange={messageInput}
          autoComplete="off"
          required
        />
      </div>
      
      <div className={styles["field-box"]}>
        <label htmlFor="name">NAME:</label>
        <input 
          type="text" 
          name="name"
          value={revName}
          onChange={nameInput}
          autoComplete="off"
        />
      </div>

      <input 
        className="submit-btn" 
        type="submit" 
        value="Leave a review" 
      />
    </form>
  )
};

export default ReviewForm;