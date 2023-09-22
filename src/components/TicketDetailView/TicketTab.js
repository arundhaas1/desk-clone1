import React from 'react'
import './TicketTab.css'
import { useNavigate } from 'react-router-dom'

function TicketTab({ticket}) {
    const navigate=useNavigate()
    const sts=(sts)=>{
        if(sts==="Open"){
          return "green"
        }else if (sts==="Closed"){
          return "red"
        }else{
          return "grey"
        }
    } 
  return (
    <div className='tickettab' onClick={()=>navigate(`/ticketdetail/${ticket.id}`)}>
        <div className='tab_left'>
            <p className='tab_owner'>{ticket.owner}</p>
            <p className='tab_id'>#{ticket.id} . <span> {ticket.account}</span></p>
            <p className='tab_days'>{ticket.days} days ago</p>
            <p id="stss" className={sts(ticket.status)}>{ticket.status}</p>
        </div>

        <div className='tab_logo'> {ticket.owner.slice(0, 2).toUpperCase()} </div>
    </div>
  )
}

export default TicketTab