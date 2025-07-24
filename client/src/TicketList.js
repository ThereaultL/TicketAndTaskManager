import { useEffect, useState } from 'react';
import './TicketList.css';
import TicketSummary from './TicketSummary';

/**
 * Fetches the list of existing tickets and maps those tickets to the homepage.
 * @return an overview of all existing tickets
 */
export default function TicketList() {

  //Testing
  fetch("/ping")
  .then((res) => res.json())
  .then((data) => console.log("Ping:", data))
  .catch((err) => console.error("Ping failed", err));

  const [tickets, setTickets] = useState([]);

  //Set tickets
  useEffect(() => {
        const fetchTickets = async () => {
        const res = await fetch("/List");
        const data = await res.json();
        setTickets(data);
        };
        fetchTickets();
  }, []);

  //Map the existing tickets
  const listTickets = tickets.map(ticket => {
    return <TicketSummary ticket={ticket} />
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
