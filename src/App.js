import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./NavBar";
import TicketList from './TicketList';
import TicketForm from "./TicketForm";
import TicketDetail from "./TicketDetail";

export default function App() {
    return <div>
      <Navbar />

      <Routes>
                <Route path="/" element={<TicketList />} />
                <Route path="/about" element={<TicketForm />} />
                <Route path="/about" element={<TicketDetail />} />
        </Routes>

      <TicketList />
    </div>
  }