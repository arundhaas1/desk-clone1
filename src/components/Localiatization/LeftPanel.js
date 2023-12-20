import React from 'react'
import './LeftPanel.css'

function LeftPanel() {
  return (
    <div className=' multi'>
        <div className='multi_search'>
            <input placeholder='Search Setup'/>
        </div>
        <div className='multi_channels'>
            <h3>CHANNELS</h3>
            <p>Email</p>
            <p>Help Center</p>
            <p>Chat</p>
            <p>Community</p>
            <p>Social</p>
            <p>Phone</p>
            <p>Web Forms</p>
            <p>ASAP</p>
            <p>Instant Mapping</p>
            <h3>GENERAL</h3>
            <p>Company</p>
            <p>Rebranding</p>
            <p>Buisness Hours</p>
            <p>Products</p>
            <p>Departments</p>
            <p>Zia</p>
            <h3>AUTOMATION</h3>
            <p>Skills</p>
            <p>BluePrint</p>
            <p>Macros</p>
            <p>Supervise</p>
        </div>
    </div>
  )
}

export default LeftPanel