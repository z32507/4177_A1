import './CSS/header.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Router, Navigate, useNavigate, useLocation, Link } from "react-router-dom";
import Event_page from './Page/Event';
import Tickets_page from './Page/Ticket';
import Checkout_page from './Page/Checkout';
import Success_page from './Page/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Event_page />} />
        <Route path="/ticketing" element={<Tickets_page />} />
        <Route path="/checkout" element={<Checkout_page />} />
        <Route path="/payment_success" element={<Success_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
