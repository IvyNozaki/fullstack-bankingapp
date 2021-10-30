import React, { useState } from "react";

// IMAGES
import bankcards from "../../assets/bankcards.svg";
import pluscards from "../../assets/pluscards.svg";
import teencards from "../../assets/teencards.svg";
import fetch from "../../assets/fetch.png";
import mobilebank from "../../assets/mobilebank.jpg";

// CSS
import "./services.css";


const Services = () => {
  const [ showModal, setShowModal ] = useState(false);

  const handleClick = (e) => {
    setShowModal(!showModal);
  };

  return (
    <>
    { 
      showModal &&
      <div>
        <div class="modal-overlay" id="modal-overlay"></div>

        <div class="modal" id="modal">
          <button class="close-button" id="close-button" onClick={handleClick}>&#215;</button>
          <div class="modal-guts">
            <h1 className="modal-h1">BENEFITS INFORMATION</h1>
            <h2 className="modal-h2">PIGGYBANK CARDS:</h2>
            <p className="modal-p">PiggyBank cards works like a standard debit card but with all the perks. Don’t be limited by area, use anywhere with our interchangeable payment processors. Choose Visa or MasterCard* when requesting for a bankcard.  We do not limit our members to one card so go ahead and order both.
            All PiggyBank cards are tied to the very first account you open but we won’t stop you there. Check out mobile banking to change which account your card is currently tied to. We offer realtime change status so you are never confused about when the changes have applied.
            *All cards come as MasterCard unless requested otherwise. Cards can only be tied to one account at a time. Adding another card to your account will generate a new card number which differs from duplicate cards.</p>

            <h2 className="modal-h2">PIGGYBANK+:</h2>
            <p className="modal-p">Our PiggyBank+ program allows you to connect with your credit card/s to help consolidate your debt. We work with you to personalized a payment that fits your need. Personalized payment plans are flexible since life is unpredictable. Work with our team of highly trained advisors on how to get your life back on track.</p>

            <h2 className="modal-h2">PIGGYTEEN:</h2>
            <p className="modal-p">All PiggyTeen accounts come with our free PiggyCredit101 monthly subscription. PiggyCredit101 subscriptions offers a monthly statement that tracks account activity and how it affects credit. PiggyCredit101 can be cancelled and resubscribed at any time. *Standard mailing fees are covered by PiggyBank, since free means FREE. We also offer paperless option through mobile banking.
            All PiggyTeen cards are personalized with your child’s legal name to make the experience as real as it should be. State issued IDs are required to open a PiggyTeen card account. Please see your state’s guidelines for obtaining a state issued ID for your child.</p>

            <h2 className="modal-h2">DISCLAIMER:</h2>
            <p className="modal-p">This website was created for a capstone project. The information provided above are not accurate or available for real world use.</p>
          </div>
        </div>
      </div>
    }
    <div className="Service-page">
      <h1 className="service-title">PiggyBank Cards</h1>
      <div className="secondary-card servicecards-container">
        <div>
          <img className="services-img" src={bankcards} alt=""/>
        </div>
        <h2 className="bankcard-msg">
          For those who still carry cards in physical wallets. Our cards work with any ATM around the world. Get a bank card free  
          <button onClick={handleClick}>today</button>.
         </h2>
      </div>

      <h1 className="service-title">PiggyBank+ Cards</h1>
      <div className="secondary-card servicecards-container">
        <div>
          <img className="services-img" src={pluscards} alt=""/>
        </div>
        <h2 className="bankcard-msg"> Consolidate your credit, tie your credit cards to your bank card and never worry about payment deadlines. Click Here to get <button onClick={handleClick}>today</button>.</h2>
      </div>


      <h1 className="service-title">PiggyTeen Credit</h1>
      <div className="secondary-card servicecards-container">
        <div className="teencard-info">
          <img className="services-img" src={teencards} alt=""/>
        </div>
        <h2 className="service-msg">We believe that credit knowledge should be taught prior to adulthood. Here we take a regular bank card and give it the benefits of a credit card. There is no debt scare as these cards only use what you've got. So go ahead and to get their credit journey <button onClick={handleClick}>today</button>.</h2>
      </div>


      <h1 className="service-title">Piggy Fetch</h1>
      <div className="secondary-card servicecards-container">
        <div className="fetch-info">
          <img className="services-img" src={fetch} alt=""/>
        </div>
        <h2 className="service-msg">Fetch is a money-transferring service that is available 24/7. Quick, safe and secure with no additional charges. Piggy Bank has it covered for your family and friends. Start sending money <button onClick={handleClick}>today</button>.</h2>
      </div>

      <h1 className="service-title">Mobile Banking</h1>
      <div className="secondary-card servicecards-container">
        <div className="mobile-info">
          <img className="services-img mobilebank-img" src={mobilebank} alt=""/>
        </div>
        <h2 className="service-msg">Our service is strictly online which means there is no standard business hours or holidays. We work whereever you are. Click <button onClick={handleClick}>today</button> to learn more about mobile banking.</h2>
      </div>

    </div>
    </> 
  );
}

export default Services;