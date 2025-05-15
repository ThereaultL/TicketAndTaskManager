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

  //need to debug: tickets are not fetching
  const listTickets = tickets.map(index => {
    <TicketSummary id={index} title={tickets[index].title} />
  });

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch(`${API}/`);
      const data = await response.json();
      setTickets(data);
    };
    fetchTickets();
  }, []);

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

      {listTickets}
      
    </div>
  );
}

export default TicketList;
