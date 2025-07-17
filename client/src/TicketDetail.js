import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./TicketSummary.css";

function TicketDetail({ticket}) {

  const location = useLocation();
  //const ticket = location.state?.ticket;

  if (!location.state?.ticket) {
    return <p>{ticket} : Ticket was not found.</p>;
  }

  //set ticket information based on user input
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  
  // const changeTitle = (event) => {
  //   setTitle(event.target.value);
  // }
  
  // const changeDescription = (event) => {
  //   setDescription(event.target.value);
  // }

  const handleSubmit = async() => {

  }

  return (
    <div className="screen-box">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Left</p>
          <p>Ticket Title:</p>
          <input class="user-input" />
          <p>Ticket ID:</p>
          <p>?</p>
        </div>
        <div>
          <p>Right</p>
          <p>Ticket Description:</p>
          <input class="user-input" />
        </div>
        <button type="submit" class="button">Save Changes</button>
      </form>
    </div>
  );
}

export default TicketDetail;
