import '../CSS/checkout.css';

import React, { useState } from 'react';
import { useNavigate, Navigate, useLocation } from "react-router-dom";


function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { subtotal } = location.state || { subtotal: 0 };

  const value_firstName = "Thomas";
  const value_lastName = "Ryan";
  const value_email = "thomasRyan@gmail.com";

  const firstNameRegEx  = /^[A-Za-z]+$/;
  const lastNameRegEx   = /^[A-Za-z]+$/;
  const emailRegEx      = /^[^@]+@([^@]+\.)+[a-z]{2,6}$/;
 
  const cardNumberRegEx   = /^[0-9]{16}$/;
  const cardNameRegEx = /^[A-Z]+[ ][A-Z]+$/;
  const expiryRegEx = /^(0[1-9]|1[0-2])\/([0-3][0-9])$/;
  const cvcRegEx = /^[0-9]{3}$/;

  const tax = 0.15 * subtotal;
  const total_price = subtotal + tax;
  
  //const [firstName, setFirstName] = useState("Thomas");
  //const [lastName, setLastName] = useState("Ryan");
  //const [email, setEmail] = useState("thomasRyan@gmail.com");
  //const [cardNumber, setCardNumber] = useState("");
  //const [cardName, setCardName] = useState("");
  //const [expiryDate, setExpiryDate] = useState("");
  //const [cvc, setCVC] = useState("");

  const [error_firstName, setError_firstName] = useState("");
  const [error_lastName, setError_lastName] = useState("");
  const [error_email, setError_email] = useState("");
  const [error_cardNumber, setError_cardNumber] = useState("");
  const [error_cardName, setError_cardName] = useState("");
  const [error_expiry, setError_expiry] = useState("");
  const [error_cvc, setError_cvc] = useState("");
  
  const [fail, setFail] = useState("");

  const verify = () => {
    let valid = true;
  
    let first_name = document.getElementById("firstName").value;
    let last_name = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let card_number = document.getElementById("cardNumber").value;
    let card_name = document.getElementById("cardName").value;
    let expiry_date = document.getElementById("expiry_date").value;
    let CVC = document.getElementById("CVC").value;
    
    
    if (!firstNameRegEx.test(first_name)) {
      setError_firstName("Invalid first name");
      valid = false;
    } else {
      setError_firstName("");
    }
  
    if (!lastNameRegEx.test(last_name)) {
      setError_lastName("Invalid last name");
      valid = false;
    } else {
      setError_lastName("");
    }
  
    if (!emailRegEx.test(email)) {
      setError_email("Email address must be valid");
      valid = false;
    } else {
      setError_email("");
    }
  
    if (!cardNumberRegEx.test(card_number)) {
      setError_cardNumber("Invalid credit card number");
      valid = false;
    } else {
      setError_cardNumber("");
    }
  
    if (!cardNameRegEx.test(card_name)) {
      setError_cardName("Invalid name on card");
      valid = false;
    } else {
      setError_cardName("");
    }
  
    if (!expiryRegEx.test(expiry_date)) {
      setError_expiry("Invalid expiry date");
      valid = false;
    } else {
      setError_expiry("");
    }
  
    if (!cvcRegEx.test(CVC)) {
      setError_cvc("Invalid CVC number");
      valid = false;
    } else {
      setError_cvc("");
    }
  
    if (valid) {
      
      if(card_number === "4431342690349231" && card_name === "THOMAS RYAN" && expiry_date === "12/30" && CVC === "417"){
        navigate('/payment_success'); 
      }else{
        setFail("Invalid card information, transaction canceled.\nPlease check your card details and try again")
      }
    }
  };

  const goBack = () =>{
    navigate('/ticketing'); 
  };

  return (
    <div className="checkout_page">
       <header header id="header" className="App-header">
          <h1> EventList </h1>
      </header>

      <div className='process'>
        <div>
          <p>Ticket</p>
        </div>

        <div>
          <p class='payment_step'>Payment</p>
        </div>
      </div>

      <div className='checkout_form'>
        <div className='left_side'>
          <div className='contact_form'>
            <h2> Contact Information </h2>
            <label>
              First Name:
              <input type="text" id="firstName" value={value_firstName} />
              {error_firstName && <div style={{color: 'red'}}>{error_firstName}</div>}
            </label>

            <br></br>

            <label>
              Last Name:
              <input type="text" id="lastName" value={value_lastName} />
              {error_lastName && <div style={{color: 'red'}}>{error_lastName}</div>}
            </label>

            <br></br>

            <label>
              Email:
              <input type="email" id="email" value={value_email} />
              {error_email && <div style={{color: 'red'}}>{error_email}</div>}
            </label>
          </div>  
        

          <div className='credit_card'>
            <h2> Payment - Visa credit card</h2>

            {fail && <div style={{ color: 'red', textAlign: 'center'}}>{fail}</div>}

            <div className='card_form'>
              <label>
                Card Number:
                <input type="text" id="cardNumber" required />
                {error_cardNumber && <div style={{color: 'red'}}>{error_cardNumber}</div>}
              </label>

              <br></br>

              <label>
                Card Name:
                <input type="text" id="cardName" required />
                {error_cardName && <div style={{color: 'red'}}>{error_cardName}</div>}
              </label>

              <br></br>

              <label>
                MM/YY:
                <input type="text" id="expiry_date" required />
                {error_expiry && <div style={{color: 'red'}}>{error_expiry}</div>}
              </label>

              <br></br>

              <label>
                CVC:
                <input type="text" id="CVC" required />
                {error_cvc && <div style={{color: 'red'}}>{error_cvc}</div>}
              </label>
            </div>
          </div> 
        </div>

        <div className='right_side'>
          <div className='back_button'>
            <button onClick={goBack}> Back </button>
          </div>

          <div className="summary">
            <h2>Order Summary</h2>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (15%): ${tax.toFixed(2)}</p>
            <p>Total: ${total_price.toFixed(2)}</p>
          </div>

          <div className='submit_button'>
            <button onClick={verify}> Checkout</button>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Checkout;
