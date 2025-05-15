import React from 'react';
import { useEffect, useState } from 'react';
import './TicketList.css';
import TicketSummary from './TicketSummary';

function TicketList() {

  const API = process.env.REACT_APP_API;

  //testing connecting to backend
  fetch(`${API}/ping`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Ping failed:", err));

  const [tickets, setTickets] = useState([]);

  //Map tickets to the ticket list

  return (
    <div>
      <div class="info-bar">

        <div class="left-info-bar">
          <p>Summary</p>
        </div>
        <div class="right-info-bar">
          <p>Status</p>
          <p>View More</p>
        </div>
      </div>  
    </div>
  );
}

export default TicketList;
