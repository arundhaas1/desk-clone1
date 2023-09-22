import React from 'react'
import './TicketDetailview.css'
import { useNavigate, useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import TicketTab from './TicketTab';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


function TicketDetailview({tickets}) {
    const navigate=useNavigate()
    const { id } = useParams()
    const ticket = tickets.filter(tic => tic.id === parseInt(id))[0] || tickets.filter(tic => tic.id === id)[0]
   

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
    <div className='ticketdetailview'>
        <div className='view_left'>
            <div className='left_header1'>
                <ArrowBackIosNewOutlinedIcon onClick={()=>navigate("/")}  className='arrow_back'/>
                <StarIcon fontSize="small" style={{color:"F6B140",fontSize:"17px"}} />
                <p>All tickets </p>
                <ArrowDropDownOutlinedIcon style={{marginTop:"7px"}} fontSize="small"/>
            </div>
            <div className='left_body'>
                {tickets.map(ticket=>{
                    return(
                        <TicketTab ticket={ticket} />
                    )
                })}
            </div>

        </div>

        <div className='view_middle'>
            <div className='middle_icons'>
                <LightbulbOutlinedIcon style={{color:"black",fontSize:"17px"}} />
                <AccessTimeOutlinedIcon style={{color:"black",fontSize:"17px"}}  />
                <TaskAltOutlinedIcon  style={{color:"black",fontSize:"17px"}} />
                <CloudOffOutlinedIcon  style={{color:"black",fontSize:"17px"}} />
                <Diversity2OutlinedIcon  style={{color:"black",fontSize:"17px"}} />
            </div>

            <div className='middle_body'>
                <div className='body_head'>
                    <p>CONTACT INFO</p>
                    <h1 />
                    <div className='cinfo'>
                          <div className='logo1'> {ticket.owner.slice(0, 2).toUpperCase()} </div>
                         <h6>{ticket.owner}</h6>
                    </div>
                </div>

                <div className='body_head'>
                    <p>PRODUCT NAME</p>
                    <h1 />
                    <h5>{ticket.product}</h5>
                </div>

                <div className='body_head'>
                    <p>ACCOUNT NAME</p>
                    <h1 />
                    <h5>{ticket.account}</h5>
                </div>

                <div className='body_head'>
                    <p>STATUS</p>
                    <h1 />
                    <p id="sts2" className={sts(ticket.status)}>{ticket.status}</p>
                </div>

                <div className='body_head'>
                    <p>SUBJECT</p>
                    <h1 />
                    <h5>{ticket.subject}</h5>
                </div>

                <div className='body_head'>
                    <p>DESCRIPTION</p>
                    <h1 />
                    <h5>{ticket.des}</h5>
                </div>

                <div className='body_head'>
                    <p>EMAIL</p>
                    <h1 />
                    <h5>{ticket.email}</h5>
                </div>
            </div>

        </div>

        <div className='view_right'>
            <div className='right_top'>
                <div className='top_info'>
                    <div className='info_left'>
                        <div className='info_headings'>
                            <TwitterIcon className='twitter'/>
                            <p>{ticket.owner}</p>
                        </div>
                        <div className='info_subheadings'>
                            <p className='sub__id'>#{ticket.id}</p>
                            <AccessTimeOutlinedIcon className='clock' />
                            <p>{`${Math.floor(Math.random() * 31)} Sep ${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60)} AM `}</p>
                        </div>
                    </div>
                    <div className='info_right'>
                        <p>Replay All</p>
                        <ChatBubbleOutlineOutlinedIcon className='bubble' />
                        <MoreHorizOutlinedIcon className='more' />
                    </div>
                </div>

                <div className='top_tabs'>
                    <p>CONVERSATION</p>
                    <p>RESOLUTION</p>
                    <p>TIME ENTRY</p>
                    <p>ATTACHMENT</p>
                    <p>ACTIVITY</p>
                    <p>APPROVAL</p>
                    <p>HISTORY</p>
                </div>

            </div>

            <div className='right_middle'>
                <img alt="" src="https://i.ibb.co/s91pHww/empty.png" />
                <p>No Conversation available</p>
            </div>

            <div className='right_bottom'>
                <div className='bottom-left'>
                    <div className='macro'>
                        <ManageHistoryOutlinedIcon className='icon' />
                        <p>Apply Macro</p>
                    </div>

                    <div className='remote'>
                        <DesktopWindowsOutlinedIcon className='icon' />
                        <p>Remote Assist</p>
                    </div>
                </div>

                <div onClick={()=>navigate(`/navigate/${ticket.id}`)} className='bottom_right'>
                    <p>Update Ticket</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TicketDetailview