import React from 'react'
import './Ticketpage.css'
import AddTickets from './AddTickets'

function TicketPage({addTicket ,tickets}) {
  return (
    <div className='ticketpage'>
        <div className='ticketpage_header'>
            <p>Tickets / <span> Add Ticket</span>/</p>
            <p className='choose'>Choose Ticket Template</p>
        </div>
        <AddTickets tickets={tickets} addTicket={addTicket}/>
    </div>
  )
}

export default TicketPage