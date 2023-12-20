import React from 'react'
import RightPanel from './RightPanel';
import Leftpanel from './Leftpanel';
import './Home.css'

function Home({tickets,deleteTicket}) {
  return (
    <div className='app_align'>
          <Leftpanel />
          <RightPanel deleteTicket={deleteTicket}  />
    </div>
  )
}

export default Home