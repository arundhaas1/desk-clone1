import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketPage from './components/addTicket/TicketPage';
import { useEffect, useState } from 'react';
import TicketDetailview from './components/TicketDetailView/TicketDetailview';
import UpdateTicket from './components/TicketDetailView/UpdateTicket/UpdateTicket';

function App() {
  const welcome=[{
    owner:"Lufy",
    subject:"Pirates",
    status:"Closed",
    email:"test@getDefaultNormalizer.com",
    product:"Ship",
    account:"Gum Gum",
    des:"Gonna be the king of pirate",
    id:100,
    days:5
  },
  {
    owner:"Itachi",
    subject:"Uchiha",
    status:"Open",
    email:"test@getDefaultNormalizer.com",
    product:"Genjutsu",
    account:"Amatarasu",
    des:"Clan or Village",
    id:101,
    days:1
  }]
  const [tickets,setTickets]=useState(welcome)

  const addTicket=(tickets)=>{
    setTickets(tickets)
  }

  const deleteTicket=(id)=>{
    setTickets(tickets.filter(ticket=>ticket.id !==id) || tickets.filter(ticket=>ticket.id !==parseInt(id)))
  }

  const updateTicket=(ticket)=>{
    const tic1=tickets.filter(tkt=>tkt.id !==parseInt(ticket.id))
    const tic2=tickets.filter(tkt=>tkt.id !==ticket.id)
    const AllTickets=tic1.length===tickets.length-1?tic1 : tic2 
    AllTickets.push(ticket)
    setTickets(AllTickets)

  }
  return (
    <Router className="app">
      <Navigation />
      <Routes>
        <Route path="/addticket" element={<TicketPage  addTicket={addTicket} tickets={tickets}/>}/>
        <Route path="/ticketdetail/:id" element={<TicketDetailview  tickets={tickets}/>}/>
        <Route path="/navigate/:id" element={<UpdateTicket updateTicket={updateTicket}  tickets={tickets}/>}/>
        <Route exact path="/" element={<Home tickets={tickets} deleteTicket={deleteTicket}/>} />
      </Routes>
    </Router>
  );
}

export default App;
