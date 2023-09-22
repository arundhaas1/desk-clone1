import React from 'react'
import './LeftPanel.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Leftpanel() {
  return (
    <div className='leftpanel'>
        <div className='left_header'>
            <div className='header_tit'>
              <DashboardCustomizeOutlinedIcon className='left_ico'/>
             <p>Headquarters</p>
            </div>

            <div className='header_tit'>
               <RssFeedIcon className='left_ico'/>
               <p>Team feeds</p>
            </div>

            <div className='header_tit2'>
              <BackupTableIcon className='left_ico'/>
               <p>Views</p>
               <div className='left_search'>
                 <SearchOutlinedIcon className='left_search_icon'/>
                 <AddOutlinedIcon className='left_search_icon' />
               </div>
            </div>

            <h6>STARRED VIEWS</h6>
            <p className='alltic'>All Tickets</p>
            <p className='caps'>ALL VIEWS</p>
        </div>

        <div className='left_footer'>
          <div className='footer_top'>
            <div className='footer_tab'>
              <PersonOutlineOutlinedIcon className='footer_icon'/>
              <p>Agent Queue</p>
            </div>
            <div className='footer_tab'>
              <Diversity2OutlinedIcon  className='footer_icon'/>
              <p>Team Queue</p>
            </div>
            <div className='footer_tab'>
              <StyleOutlinedIcon className='footer_icon'/>
              <p>Tags</p>
            </div>

          </div>

          <div className='footer_bottom'>
            <ReadMoreOutlinedIcon className='bot_icon'/>
          </div>
        </div>
    </div>
  )
}

export default Leftpanel