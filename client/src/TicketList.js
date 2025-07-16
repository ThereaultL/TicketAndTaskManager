import React from 'react';
import { useEffect, useState } from 'react';
import './TicketList.css';
import TicketSummary from './TicketSummary';

function TicketList() {

  fetch("http://localhost:5000/ping")
  .then((res) => res.json())
  .then((data) => console.log("Ping:", data))
  .catch((err) => console.error("Ping failed", err));

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
        const fetchTickets = async () => {
        const response = await fetch("http://localhost:5000/");
        const data = await response.json();
        setTickets(data);
        };
        fetchTickets();
  }, []);

  const listTickets = tickets.map(index => {
    <TicketSummary id={index} title={tickets[index].title} />
  });


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
