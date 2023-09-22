import React from 'react'
import {useNavigate } from "react-router-dom";
import './Navigation.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function Navigation() {
    const navigate=useNavigate()
  return (
    <div className='navigation'>
        <div className='nav_left'>
          <FlashOnIcon className='flash_icon'/>
          <p onClick={()=>navigate("/")}>Tickets</p>
          <p>Knowledge Base</p>
          <p>Customers</p>
          <p>Analytics</p>
          <p>Activities</p>
          <p>Community</p>
          <p>Social</p>
          <p>Chat</p>
          <p>IM</p>
        </div>
        <div className='nav_right'>
            <SearchOutlinedIcon className='nav_icon'/>
            <SettingsSuggestTwoToneIcon className='nav_icon'/>
            <CottageTwoToneIcon className='nav_icon'/>
            <p  onClick={()=>navigate("/addticket")}>Add Ticket</p>
            <span>AD</span>
            <WidgetsTwoToneIcon className='nav_icon'/>
        </div>
    </div>
  )
}

export default Navigation