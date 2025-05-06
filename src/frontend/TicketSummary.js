import React from "react";
import { NavLink } from "react-router-dom";
import "./TicketSummary.css";

export default function TicketSummary({id, title}) {



    return (
        <div class="screen-box">
            {/** Ticket preview, with descriptive title and a ticket number */}
            <div class="sum">
                <h1>{title.data}</h1>
                <p>#{id.data}</p>
            </div>
            {/** Ticket information such as status, and view more details link */}
            <div class="ticket-content">
                <p class ="box">Status</p>
                <div class="box">
                    <NavLink to="/TicketDetail">Details</NavLink>
                </div>
            </div>
        </div>
    );
}