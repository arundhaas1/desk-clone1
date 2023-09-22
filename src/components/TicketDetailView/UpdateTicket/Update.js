import React, { useEffect, useState } from 'react'
import './Update.css'
import { useNavigate } from 'react-router-dom'

function Update({tickets,id,updateTicket}) {
    const navigate=useNavigate()
    const ticket = tickets.filter(tic => tic.id === parseInt(id))[0]|| tickets.filter(tic => tic.id === id)[0]

    const[subject,setSubject]=useState("")
    const[owner,setOwner]=useState("")
    const[status,setStatus]=useState("")
    const[email,setEmail]=useState("")
    const[product,setProduct]=useState("")
    const[account,setAccount]=useState("")
    const[des,setDes]=useState("")
    const [isStatusOpen, setStatusIsOpen] = useState(false);
    const [isOwnerOpen, setOwnerIsOpen] = useState(false);
   
    useEffect(()=>{
        setSubject(ticket.subject)
        setOwner(ticket.owner)
        setStatus(ticket.status)
        setEmail(ticket.email)
        setProduct(ticket.product)
        setAccount(ticket.account)
        setDes(ticket.des)
    },[ticket])
  
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
          id:id,
          days:Math.floor(Math.random() * 10)
        }
        updateTicket(ticket)
        navigate("/")
      }
  
    }
  return (
    <div className='update'>
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
            <input value={subject} onChange={(e)=>setSubject(e.target.value)}  type="text" />
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
            <input  value={status} onClick={toggleStatusDropdown} />
          </div>

          {isStatusOpen && (
        <div  className="dropdown">
          <p onClick={()=>settingStatus("Open")}><span>Open</span></p>
          <p onClick={()=>settingStatus("Closed")}><span>Closed</span></p>
          <p onClick={()=>settingStatus("Waiting")}><span>Waiting</span></p>
          <p onClick={()=>settingStatus("Escalated")}><span>Escalated</span></p>
        </div>
           )}

          <div className='input'>
            <p>Contact Email</p>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
          </div>
        </div>

        <div className='allignment'>
          <div className='input'>
            <p>Product Name</p>
            <input value={product} onChange={(e)=>setProduct(e.target.value)} type="text" />
          </div>

          <div className='input'>
            <p>Account Name</p>
            <input value={account} onChange={(e)=>setAccount(e.target.value)} type="text" />
          </div>
        </div>

        <div className='des'>
          <p>Description</p>
          <input value={des} onChange={(e)=>setDes(e.target.value)} type="text" />
        </div>

{/* /////submission//////// */}
        <div className='form_submit'>
            <p onClick={()=>handleSubmit()} className='submit'>Update</p>
            <p className='cancel' onClick={()=>navigate("/")}>Cancel</p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Update