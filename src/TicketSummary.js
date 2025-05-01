import React from "react";
import { NavLink } from "react-router-dom";
import "./TicketSummary.css";

export default function TicketSummary() {
    return <div class="ticket-sum">
        <div>
            <h1>Ticket Title</h1>
            <p>#Ticket-Number</p>
        </div>
        <NavLink to="/TicketDetail">Details</NavLink>
    </div>
}