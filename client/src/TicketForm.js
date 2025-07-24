import { useState } from "react";
import "./TicketForm.css"

/**
 * A form which allows a user to create a ticket by entering a title, and description. Once 
 * a ticket is submitted, then the ticket is added to the list of ongoing tickets. If a ticket
 * fails to populate, then an error is thrown in the console and ticket form will not clear.
 * @returns Form sheet for user to create a new ticket
 */
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
      "/TicketForm", {
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
