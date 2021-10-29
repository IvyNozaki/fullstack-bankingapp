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
            <h1>Modal Example</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita corrupti laudantium aperiam, doloremque explicabo ipsum earum dicta saepe delectus totam vitae ipsam doloribus et obcaecati facilis eius assumenda, cumque.</p>
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

          {/* *All teencards are personalized with their name to make the experience as real as it is should be so a state issued ID is required to start a teen credit account. Please see your state's guidelines for obtaining a state issued ID for your child. A credit statement will be mailed each month with notes on how the account activity affects the credit score. *Standard mailing fees are covered by PiggyBank. */}
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