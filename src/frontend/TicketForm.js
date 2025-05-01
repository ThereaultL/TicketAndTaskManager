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

  const handleSubmit = (event) => {
    setTitle("");
    setDescription("");
    event.preventDefault();
  }

  //use on submit
  useEffect(() => {
    const fetchTicket = async () => {
        const response = await fetch(
          "http://localhost:3000/TicketForm", {
            method : "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          }
        )
    }
  }); 

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
