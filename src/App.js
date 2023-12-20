import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketPage from './components/addTicket/TicketPage';
import TicketDetailview from './components/TicketDetailView/TicketDetailview';
import UpdateTicket from './components/TicketDetailView/UpdateTicket/UpdateTicket';
import Multilingual from './components/Localiatization/Multilingual';


function App() {
  return (
    <Router className="app">
      <Navigation />
      <Routes>
        <Route path="/addticket" element={<TicketPage/>}/>
        <Route path="/ticketdetail/:id" element={<TicketDetailview />}/>
        <Route path="/navigate/:id" element={<UpdateTicket />}/>
        <Route path="/multilingual" element={<Multilingual />}/>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
