import React from 'react'
import './UpdateTicket.css'
import { useParams } from 'react-router-dom'
import Update from './Update'

function UpdateTicket() {
    const { id } = useParams()
  return (
    <div className='updateticket'>
        <div className='ticketpage_header'>
            <p>Tickets / <span> Update Ticket</span>/</p>
            <p className='choose'>Choose Ticket Template</p>
        </div>
        <Update id={id}/>
    </div>
  )
}

export default UpdateTicket