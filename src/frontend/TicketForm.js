import React, { useEffect } from "react";
import "./TicketForm.css"

export default function TicketForm() {
  //use on submit
  useEffect(() => {
    const fetchTicket = async () => {
        const response = await fetch(
          "http://localhost:3000/TicketForm", {
            method : "POST",
            body: JSON.stringify({
              title: "Something here",
              description: "Another something here",
            }),
          }
        )
    }
  }); 

  return (
    <div className="ticket-form">
      <div class="form-box">
        <p>Ticket Title:</p>
        <input class="user-input" />
      </div>
      <div class="form-box">
        <p>Ticket Description:</p>
        <input class="user-input" />
      </div>
      <button type="submit" class="button">Submit Ticket</button>
    </div>
  );
}
