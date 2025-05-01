import React from "react";
import "./TicketForm.css"

export default function TicketForm() {
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
