import '../CSS/ticket.css';

import React, { useState } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';

function Ticket() {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const price = 5; 

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
  };

  const subtotal = (quantity * price);

  const goToCheckout = () => {
    if (quantity > 0) {
      navigate('/checkout', { state: { subtotal } }); 
    }
  };

  return (
    <div className="ticket_page">
       <header header id="header">
        <div className='title'>
          <h1> EventList </h1>
        </div>
        
      </header>

      <div className='process'>
        <div>
          <p class='tickets_step'>Ticket</p>
        </div>

        <div>
          <p>Payment</p>
        </div>
      </div>

      <div className="ticket_event_info">
        <h2> Tickets for Dungeons and Dragons Game Night </h2>
        <p>Date: June 9, 2024 </p>
        <p>Time: 5:30 pm ~ 10:00 pm</p>
      </div>

      <div className='tickets'>
        <div className='ticket_name'>
          <p> Dungeon Ticket </p>
        </div>

        <div className='ticket_price'>
          <p> $5 </p>
        </div>

        <div className="num_control">
          <button onClick={decrement} className="add_btn">-</button>
          <span>{quantity}</span>
          <button onClick={increment} className="sub_btn">+</button>
        </div>
      </div>
      
      <div className='price'>
        <div className="subtotal">
          <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        </div>

        <div className='checkout_button'>
          <button onClick={goToCheckout} disabled={quantity === 0}> Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
