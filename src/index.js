import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TicketList from './TicketList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicketList />
  </React.StrictMode>
);
