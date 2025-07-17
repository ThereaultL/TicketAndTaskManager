import { NavLink } from "react-router-dom";
import "./TicketSummary.css";

/**
 * Creates a short overview for a ticket, with it's title, id, status, and the option to view 
 * more details about the ticket
 * @param ticket object which contain's the content of a ticket
 * @returns a brief summary of a ticket
 */
export default function TicketSummary({ticket}) {

    return (
        <div class="screen-box">
            {/** Ticket preview, with descriptive title and a ticket number */}
            <div class="sum">
                <h1>{ticket.title}</h1>
                <p>#{ticket.id}</p>
            </div>
            {/** Ticket information such as status, and view more details link */}
            <div class="ticket-content">
                <p class ="box">{ticket.status}</p>
                <div class="box">
                    <NavLink to="/TicketDetail" state={ticket} >Details</NavLink>
                </div>
            </div>
        </div>
    );
}