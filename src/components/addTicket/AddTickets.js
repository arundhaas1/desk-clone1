import React, { useState } from 'react'
import './AddTickets.css'
import {useNavigate } from "react-router-dom";

function AddTickets({addTicket,tickets}) {

  const navigate=useNavigate()

  const[subject,setSubject]=useState("")
  const[owner,setOwner]=useState("")
  const[status,setStatus]=useState("")
  const[email,setEmail]=useState("")
  const[product,setProduct]=useState("")
  const[account,setAccount]=useState("")
  const[des,setDes]=useState("")
  const [isStatusOpen, setStatusIsOpen] = useState(false);
  const [isOwnerOpen, setOwnerIsOpen] = useState(false);

  const toggleStatusDropdown = () => {
    setStatusIsOpen(!isStatusOpen)
    setOwnerIsOpen(false)
  };

  const toggleOwnerDropdown=()=>{
    setOwnerIsOpen(!isOwnerOpen)
    setStatusIsOpen(false)
  }

  const settingOwner=(name)=>{
    setOwner(name)
    setOwnerIsOpen(false)
  }

  const settingStatus=(status)=>{
    setStatus(status)
    setStatusIsOpen(false)
  }

  const handleSubmit=()=>{
    if(owner==="" || subject===""|| email==="" || product==="" ||account==="" || des==="" ){
      alert("fill panra dei")
    }else if(!email.includes("@") || !email.includes(".com")){
      alert("enter valid email")
    }else{
      const ticket={
        subject,
        owner,
        status,
        email,
        product,
        account,
        des,
        id:100+tickets.length,
        days:Math.floor(Math.random() * 10)
      }
      tickets.push(ticket)
      addTicket(tickets)
      navigate("/")
    }

  }

  return (
    <div className='addticket'>
      <div className='form'>
        <h3>Ticket Information</h3>
        <div className='allignment'>
          <div className='input'>
            <p>Owner</p>
            <input value={owner} onClick={toggleOwnerDropdown} type="text" />
          </div>

          <div className='input'>
            <p>Subject</p>
            <input onChange={(e)=>setSubject(e.target.value)}  type="text" />
          </div>

          {isOwnerOpen && (
        <div className="dropdown">
          <p onClick={()=>settingOwner("lufy")}><span>Lufy</span></p>
          <p onClick={()=>settingOwner("Tony")}><span>Tony</span></p>
          <p onClick={()=>settingOwner("Itachi")}><span>Itachi</span></p>
          <p onClick={()=>settingOwner("Sakura")}><span>Sakura</span></p>
        </div>
           )}
        </div>

        <div className='allignment'>
          <div className='input'>
            <p>Status</p>
            <input value={status} onClick={toggleStatusDropdown} />
          </div>

          {isStatusOpen && (
        <div className="dropdown">
          <p onClick={()=>settingStatus("Open")}><span>Open</span></p>
          <p onClick={()=>settingStatus("Closed")}><span>Closed</span></p>
          <p onClick={()=>settingStatus("Waiting")}><span>Waiting</span></p>
          <p onClick={()=>settingStatus("Escalated")}><span>Escalated</span></p>
        </div>
           )}

          <div className='input'>
            <p>Contact Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" />
          </div>
        </div>

        <div className='allignment'>
          <div className='input'>
            <p>Product Name</p>
            <input onChange={(e)=>setProduct(e.target.value)} type="text" />
          </div>

          <div className='input'>
            <p>Account Name</p>
            <input onChange={(e)=>setAccount(e.target.value)} type="text" />
          </div>
        </div>

        <div className='des'>
          <p>Description</p>
          <input onChange={(e)=>setDes(e.target.value)} type="text" />
        </div>

{/* /////submission//////// */}
        <div className='form_submit'>
            <p onClick={()=>handleSubmit()} className='submit'>Submit</p>
            <p className='cancel' onClick={()=>navigate("/")}>Cancel</p>
        </div>

      </div>
    </div>
  )
}

export default AddTickets