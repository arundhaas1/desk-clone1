import React, { useState } from 'react'
import "./Ticket.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deleteTicket } from '../ticketAction';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function Ticket({ticket,deleteTicket,selectIds}) {
  const[deleting,setDeleting]=useState(false)
  const[selected,setSelected]=useState(false);

  useEffect(()=>{
    if(selectIds.length===0){
      setSelected(false)
    }
  },[selectIds])
  const navigate=useNavigate();
    const sts=(sts)=>{
        if(sts==="Open"){
          return "green"
        }else if (sts==="Closed"){
          return "red"
        }else{
          return "grey"
        }
    } 
    const deleteIdArray=(id)=>{
        if(selectIds.indexOf(id) === -1){
          setSelected(true);
          selectIds.push(id);
        }else{
          setSelected(false);
          const index=selectIds.findIndex(item => item.id === id)
          selectIds.splice(index, 1);
        }
    }
  return (
    <div className={`ticket ${selected?"selected":"notSelected"}`}  onMouseLeave={()=>setDeleting(false)} onMouseEnter={()=>setDeleting(true)}>
        <div className='logo'>
          <TwitterIcon  onClick={()=>deleteIdArray(ticket.id)}/>
        </div>

        <div  onClick={()=>navigate(`/ticketdetail/${ticket.id}`)} className='details'>
            <p>{ticket.subject}</p>
            <p><span>#{ticket.id} •</span> <span>{`${ticket.owner} •`}</span> <span> {ticket.days} days ago</span></p>
        </div>
        {deleting?  <DeleteOutlineOutlinedIcon className='ticket_delete' onClick={()=>deleteTicket(ticket.id)}/> : null}
        

        <div className='statuses'>
            <p className={sts(ticket.status)}>{ticket.status}</p>
            <div className='logo1'> {ticket.owner.slice(0, 2).toUpperCase()} </div>
        </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
  };
};

export default connect( mapStateToProps, { deleteTicket })(Ticket)