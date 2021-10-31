import React from "react";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ title, revName, message }) => {
  return (
    <div className={styles["review-card"]}>
      <h2>"{ title }"</h2>
      <p>{ message }</p>
      <p>- { revName }</p>
    </div>
  )
};

export default ReviewCard;