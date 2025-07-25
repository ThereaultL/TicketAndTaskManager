import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./TicketSummary.css";
import "./TicketDetail.css";
import "./TicketForm.css";

function TicketDetail() {
  const location = useLocation();
  const ticket = location.state;

  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const [status, setStatus] = useState(ticket.status);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  }

  const handleUpdate = async (event) => {
    event.preventDefault();
    if(status != "Resolved") {
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
            status: status,
          }),
        }
      );

      if (response.ok) {
        const newTicket = await response.json();
        alert("Ticket updated!");
      } else {
        alert("Failed to update ticket.");
      }
    } else{
      handleResolve(event); // Call handleResolve to resolve the ticket if status is "Resolved"
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
          status: status, 
        }),
      }
    );

    if (response.ok) {
      const updatedTicket = await response.json();
      alert("Ticket resolved!");
    } else {
      alert("Failed to resolve ticket.");
    }
  }

  return (
    <div className="screen-box">
      <div class="detail-sum">
        <div class="left-box">
          <div class="form-row">
            <p>Title: </p>
            <input class ="input" value={title} onChange={handleTitleChange} />
          </div>
          <div class="form-row">
            <p>Description: </p>
            <input class ="input" value={description} onChange={handleDescriptionChange} />
          </div>
        </div>
        <div class="right-box">
          <div class="form-row">
          <p>ID: </p>
          <input class ="input" value={ticket.id} readOnly/>
          </div>
          <div class="form-row">
          {/** Want to change into a drop box with status options */}
          <p>Status: </p>
          <select onChange={handleStatusChange} value={status}>
            <option value="Open">Open</option>
            <option value="Hold">Hold</option>
            <option value="Resolved">Resolved</option>
          </select>
          </div>
        </div>
      </div>
      <div class="button-row">
        <button class="button" onClick={handleUpdate} >Update</button>
        <button class="button" onClick={handleResolve} >Resolve</button>
      </div>
    </div>
  );
}

export default TicketDetail;
