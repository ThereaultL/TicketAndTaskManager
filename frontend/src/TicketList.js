import React from 'react';
import { useEffect, useState } from 'react';
import './TicketList.css';
import TicketSummary from './TicketSummary';

function TicketList() {

  const API = process.env.REACT_APP_API;
  console.log(`API addres: ${process.env.REACT_APP_API}`);

  //testing connecting to backend
  fetch(`${API}/ping`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Ping failed:", err));

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch(`${API}/`, {method: "GET"});
      const data = await response.json();
      setTickets(data);
    };
    fetchTickets();
  }, []);

  //need to debug: tickets are not fetching
  

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

      {tickets.map((index) => {
        <p>{index}</p>
      })}
      
    </div>
  );
}

export default TicketList;
