import React, { useState } from 'react'
import './RightPanel.css'
import Ticket from './Ticket'
import StarIcon from '@mui/icons-material/Star';

function RightPanel({tickets,deleteTicket}) {
    const [count,setCount]=useState(false)
  return (
    <div className='rightpanel'>
        <div className='rightpanel_header'>
            <div className='header_right'>
                <StarIcon fontSize="small" style={{color:"F6B140"}} />
                <p>All tickets ({tickets.length}) </p>
            </div>

            <div className='header_left'>
                <p onClick={()=>setCount(!count)}  className='count'>Total Count<span style={{display:`${count? "":"none"}`}}>:{tickets.length}</span></p>
                <p className='view'>Classic View</p>
            </div>
        </div>
        {tickets.map((ticket)=>{
           return(
            <Ticket deleteTicket={deleteTicket} ticket={ticket} />
           )
        })}
    </div>
  )
}

export default RightPanel