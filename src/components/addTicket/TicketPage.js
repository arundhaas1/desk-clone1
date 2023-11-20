import React from 'react'
import './Ticketpage.css'
import AddTickets from './AddTickets'

function TicketPage() {
  return (
    <div className='ticketpage'>
        <div className='ticketpage_header'>
            <p>Tickets / <span> Add Ticket</span>/</p>
            <p className='choose'>Choose Ticket Template</p>
        </div>
        <AddTickets/>
    </div>
  )
}

export default TicketPage