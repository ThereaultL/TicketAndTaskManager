import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./TicketSummary.css";

function TicketDetail() {
  const location = useLocation();
  const ticket = location.state;

  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleUpdate = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "http://localhost:5000/Update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: ticket.id,
          title: title,
          description: description,
          status: ticket.status,
        }),
      }
    );

    if (response.ok) {
      const newTicket = await response.json();
      alert("Ticket updated!");
    } else {
      alert("Failed to update ticket.");
    }
  }

  const handleResolve = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "/resolve", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: ticket.id,
          title: title,
          description: description,
          status: ticket.status, 
        }),
      }
    );

    if (response.ok) {
      const updatedTicket = await response.json();
      alert("Ticket resolved!");
      // Optionally, you can redirect or update the state here
    } else {
      alert("Failed to resolve ticket.");
    }
  }

  return (
    <div className="screen-box">
        <div>
          <p>Title:</p>
          <input value={title} onChange={handleTitleChange} />
          <p>Description</p>
          <input value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <p>ID: {ticket.id}</p>
          {/** Want to change into a drop box with status options */}
          <p>Status: {ticket.status}</p>
        </div>
        <button class="button" onClick={handleUpdate} >Update</button>
        <button class="button" onClick={handleResolve} >Resolve</button>
    </div>
  );
}

export default TicketDetail;
