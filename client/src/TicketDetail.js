import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./TicketSummary.css";

function TicketDetail() {
  const location = useLocation();
  const ticket = location.state;
  console.log(ticket);

  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleUpdate = async (event) => {
  
  }

  const handleResolve = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: ticket.id,
          title: title,
          description: description,
          status: "Resolved", // Assuming you want to set the status to Resolved
        }),
      }
    );

    if (response.ok) {
      const updatedTicket = await response.json();
      console.log("Ticket updated:", updatedTicket);
      // Optionally, you can redirect or update the state here
    } else {
      console.error("Failed to update ticket");
    }
  }

  return (
    <div className="screen-box">
      <form>
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
        <button type="submit" class="button">Update</button>
        <button type="submit" class="button">Resolve</button>
      </form>
    </div>
  );
}

export default TicketDetail;
