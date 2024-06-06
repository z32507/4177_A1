import '../CSS/Event_info.css';

import React, { useState } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';

function Event() {
  const navigate = useNavigate();

  const tickering = () => {
      navigate('/ticketing'); 
  }

  return (
    <div className="event_page">
       <header header id="header" >
       <div className='title'>
          <h1> EventList </h1>
        </div>
     
      </header>

      <div className='event_body'>
        <div className='left'>
          <div className="event_page_title">
            <h2> Dungeons and Dragons Game Night </h2>
          </div>

          <div className='event_page_date'>
            <p>Date: June 9, 2024 </p>
            <p>Time: 5:30 pm ~ 10:00 pm</p>
          </div>

          <div className="event_des">
            <p> Welcome to the Dungeons and Dragons Game Night at XXX game</p>
            <p> The game strart each Sunday from 5:30 pm to 10:00 pm</p>
            <p> Entry fee: $5</p>
          </div>
          
        </div>

        <div className='right'>
          <button onClick={tickering}> Get Tickets </button>

          <div>
            <p>Location</p>
            <p>XXXX, Fake Street, Halifax, NS</p>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Event;