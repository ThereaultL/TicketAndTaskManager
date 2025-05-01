import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return <div>
        <nav class="navbar">
            <ul>
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Ticket List</NavLink>
                </li>
                <li>
                    <NavLink to="/TicketForm" end className={({ isActive }) => isActive ? "active" : ""}>Ticket Form</NavLink>
                </li>
            </ul>
        </nav>
    </div>
}