import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import piggybank from '../../assets/piggybank.png';
import slide from '../../assets/slide.gif';
import "./Home.css";
import ReviewCard from "../ReviewCard/ReviewCard";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const getReviews = async () => {
      try {
        const result = await fetch("/reviews");
  
        const data = await result.json();
  
        setReviews(data);
      } catch (err) {
        console.log(err);
      }
    };

    getReviews();
  }, [pathname])
  
  return (
    <>
      <div className="secondary-card home-welcome">
        <img className="piggybank" src={piggybank} alt="piggybank"/>

        <div className="welcomemsg">
          <p>
            Here at Piggy Bank we strive to provide service that can help you visually take charge of all your monetary flow. Start taking charge of your own person Piggy Bank today.
          </p>
          <Link to="/signup">Get started</Link>
        </div>

      </div>
      
      <div className="secondary-card">
        <div className="cashpile">
          <p>"We believe that having a visual on your money helps promote growth."</p>
        </div>
      </div>
      
      <div className="secondary-card home-welcome">

        <div className="welcomemsg2">
          <p>
            We are a 100% judge-free zone and we welcome you to save for any, we mean ANY, occasion. When opening an account YOU choose a label that fits your need. So go ahead and create unlimited accounts for every need.
          </p>
        </div>
        
        <img className="piggybank" src={slide} alt="" />
      </div>

      <div className="secondary-card home-services">      
        <div className="mini-card">
          <h2>Bank Cards</h2>
          <div className="servicecard bankcard-img">
            <p>
              Separate yourself from the hassle with our array of cards specialized for your needs and lifestyle.
            </p>
          </div>
          <Link to="/services">
            <button className="learnmore-btn">LEARN MORE</button>
          </Link>
        </div>

        <div className="mini-card">
          <h2>Teen Credit</h2>
          <div className="servicecard teencred-img">
            <p>
              Adulting is hard but it doesn't have to be. Teach your teen about how credit works without the scare.</p>
          </div>
          <Link to="/services">
            <button className="learnmore-btn">LEARN MORE</button>
          </Link>
        </div>

        <div className="mini-card">
          <h2>Cash Fetch</h2>
          <div className="servicecard moneytrans-img">
            <p>Sending money is just a click away. We know life can get in the way but our piggies fetch 24/7 just for you!</p>
          </div>
          <Link to="/services">
            <button className="learnmore-btn">LEARN MORE</button>
          </Link>

        </div>
      </div>
      
      <h2>Don't take it from us, here are what people have to say:</h2>
      <div className="reviews-container">
        <div className="review-card1"></div>
        {reviews && reviews.map(review => {
          return (
            <ReviewCard 
              title={ review.title } 
              revName={ review.revName } 
              message={ review.message }
              key={ review.revName }
            />
          )
          })
        }
      </div>
    </>
  );
}

export default Home;