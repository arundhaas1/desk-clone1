import React, { useEffect, useState,useRef } from 'react'
import './RightPanel.css'
import Ticket from './Ticket'
import StarIcon from '@mui/icons-material/Star';
import { connect } from 'react-redux';
import { bulkDeleteTickets } from '../ticketAction';
import { bulkCloneTickets } from '../ticketAction';
import { bulkUpdateTickets } from '../ticketAction';
import { AcUnitOutlined } from '@mui/icons-material';


function RightPanel({tickets,bulkDeleteTickets,bulkCloneTickets,bulkUpdateTickets}) {
    const [count,setCount]=useState(false)

    const [owner, setOwner] = useState('');
    const [subject, setSubject] = useState('');
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('');
    const [account, setAccount] = useState('');
    const [des, setDes] = useState('');
    const [secId,setSetId]=useState([]);
    
    const selectIds=[]
    const bulkClone=()=>{
      if(selectIds.length===1){
      bulkCloneTickets(selectIds)
      selectIds.length=0;
    }else {
      alert("Bulk clone not supported")   
    }
  }

  
  const bulkUpdate = () => {
    setSetId(selectIds)
    const owner = prompt('OWNER');
    if (owner !== null) {
      setOwner(owner);
    }

    const subject = prompt('SUBJECT');
    if (subject !== null) {
      setSubject(subject);
    }

    const status = prompt('STATUS');
    if (status !== null) {
      setStatus(status);
    }

    const email = prompt('EMAIL');
    if (email !== null) {
      setEmail(email);
    }

    const product = prompt('PRODUCT');
    if (product !== null) {
      setProduct(product);
    }

    const account = prompt('ACCOUNT');
    if (account !== null) {
      setAccount(account);
    }

    const des = prompt('DESCRIPTION');
    if (des !== null) {
      setDes(des);
    }
  }

  useEffect(() => {
    update(owner,subject,status,email,product,account,des);
  }, [owner,subject,status,email,product,account,des]);

  const update = (owner,subject,status,email,product,account,des) => {
    const updates = {
      owner,
      subject,
      status,
      email,
      product,
      account,
      description:des
    };
    bulkUpdateTickets(secId, updates);
  }
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
            <Ticket selectIds={selectIds} ticket={ticket} />
           )
        })}
        <div className={`bulk_actions ${selectIds.length==0 ? "none" : "show"} `}>
          <p className='bulk_action' onClick={()=>bulkDeleteTickets(selectIds)}>DELETE</p>
          <p className='bulk_action' onClick={bulkUpdate}>UPDATE</p>
          <p className='bulk_action' onClick={bulkClone}>CLONE</p>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      tickets: state.tickets,
    };
  };

export default connect(mapStateToProps,{bulkDeleteTickets,bulkCloneTickets,bulkUpdateTickets})(RightPanel);