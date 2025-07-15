import React, { useEffect, useState } from "react";
import "./TicketForm.css"

export default function TicketForm() {

  //set ticket information based on user input
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  }

  const changeDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "http://localhost:5000/TicketForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      }
    );

    if (response.ok) {
      const newTicket = await response.json();
      console.log("Ticket created:", newTicket);
      
      // Reset form fields
      setTitle("");
      setDescription("");
      
      // Optionally trigger a state update to re-render TicketSummary
    } else {
      console.error("Failed to create ticket");
    }
  }

  return (
    <div className="ticket-form">
      <form onSubmit={handleSubmit}>
      <div class="form-box">
        <p>Ticket Title:</p>
        <input class="user-input" value={title} onChange={changeTitle}/>
      </div>
      <div class="form-box">
        <p>Ticket Description:</p>
        <input class="user-input" value={description} onChange={changeDescription} />
      </div>
      <button type="submit" class="button">Submit Ticket</button>
      </form>
    </div>
  );
}
