import React from "react";
import { Link } from "react-router-dom";
import piggybank from '../../assets/piggybank.png';
import slide from '../../assets/slide.gif';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="secondary-card home-welcome">
        <img className="piggybank" src={piggybank} alt="piggybank"/>
        <div className="welcomemsg">
          <p>Here at Piggy Bank we strive to provide service that can help you visually take charge of all your monetary flow. Start taking charge of your own person Piggy Bank today.
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
        <h1 className="welcomemsg2">We are a 100% judge-free zone and we welcome you to save for any, we mean ANY, occasion. When opening an account YOU choose a label that fits your need. So go ahead and create unlimited accounts for every need.</h1>
        <img className="piggybank" src={slide} alt="" />

      </div>

      <div className="secondary-card home-services">      
        <div className="mini-card">
          <h2>Bank Cards</h2>
          <div className="servicecard bankcard-img">
            <p>Separate yourself from the hassle with our array of cards specialized for your needs and lifestyle.
            </p>
          </div>
          <button>Learn more</button>
        </div>

        <div className="mini-card">
          <h2>Teen Credit</h2>
          <div className="servicecard teencred-img">
            <p>Adulting is hard but it doesn't have to be. Teach your teen about how credit works without the scare.</p>
          </div>
          <button>Learn more</button>
        </div>

        <div className="mini-card">
          <h2>Cash Fetch</h2>
          <div className="servicecard moneytrans-img">
            <p>Sending money is just a click away. We know life can get in the way but our piggies fetch 24/7 just for you!</p>
          </div>
          <button>Learn more</button>
        </div>

      </div>

      <h2>Don't take it from us, here are what people have to say:</h2>
      <div className="secondary-card reviews">

        <div className="scroll-container">
          <div className="review-card review-card1">
          </div>
          <div className="review-card">
            <h3>1 Illo excepturi!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque consectetur illo officia natus! - John J.</p>
          </div>
          <div className="review-card">
            <h3>2 Illo excepturi!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque consectetur illo officia natus! - John J.</p>
          </div>
          <div className="review-card">
            <h3>3 Illo excepturi!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque consectetur illo officia natus! - John J.</p>
          </div>
          <div className="review-card">
            <h3>4 Illo excepturi!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque consectetur illo officia natus! - John J.</p>
          </div>
          <div className="review-card">
            <h3>5 Illo excepturi!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque consectetur illo officia natus! - John J.</p>
          </div>
          <div className="review-card">
            <h3>6 Illo excepturi!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque consectetur illo officia natus! - John J.</p>
          </div>
          <div className="review-card">
            <h3>7 Illo excepturi!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque consectetur illo officia natus! - John J.</p>
          </div>

        </div>
      </div>
  </div>
  );
}

export default Home;