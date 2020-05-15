import React from 'react';

import './App.css';
import Tickets from './components/Tickets/Tickets'
import TicketList from './api/tickets.json'
function App() {
  
  
  return (
    <div className="App">
      <Tickets tickets={TicketList} />
    </div>
  );
}

export default App;
