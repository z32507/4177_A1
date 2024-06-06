import '../CSS/Success.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {

  return (
    <div className="cart-item">
       <header header id="header" className="App-header">
          <h1> EventList </h1>
      </header>

        <div className="success_summary">
            <h2> Payment Success </h2>
        </div>

        <div className='order_info'>
          <div className='user_info'>
            <p> Name: Thomas Ryan</p>
            <p> Email: thomasRyan@gmail.com</p>
            <p> Order Numer:  #707280 </p>
            <p> Card Number: 4431********9231</p>
          </div>

          <br></br>

          <div className='order_list'>
            <p>Order:</p>
            <p> 1 Dungeon Ticket - $5</p>
          </div>

          <br></br>
          
          <div className='total_price'>
            <p> Toal Price: $5.75</p>
          </div>  
        </div>    
    </div>
  );
}

export default Success;