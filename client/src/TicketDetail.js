import { useLocation } from "react-router-dom";
import "./TicketSummary.css";

function TicketDetail() {
  const location = useLocation();
  const ticket = location.state;
  console.log(ticket);

  return (
    <div className="screen-box">
        <p>DEATILS</p> 
      
        <div>
          <p>{ticket.title}</p>
          <p>{ticket.description}</p>
        </div>
        <div>
          <p>{ticket.id}</p>
          <p>{ticket.status}</p>
        </div>
    </div>
  );
}

export default TicketDetail;
