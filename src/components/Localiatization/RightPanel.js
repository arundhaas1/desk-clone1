import React from 'react'
import './RightPanel.css'

function RightPanel({switchOpen}) {
  return (
    <div className='multi_rightpanel'>
      <div className='multi_header'>
          <div className='multi_header_left'>
            <p>Customization / Languages / <span>Multilingual</span></p>
          </div>

          <div className='multi_header_right'>
              <p className='add_lang'>Add Language</p>
              <p className='import'>Import</p>
              <p className='enabled'>Enabled</p>
              <p className='i'>i</p>
          </div>
      </div>

      <div className='multi_info'>
          <p className='multi_info_head'>MULTILINGUAL</p>
          <p>Multilingual functionality lets you translate field names and picklist values into any of the languages supported by Zoho Desk. This will help users view them in their preferred language. To Translate into the desired language Add Language {'>'} Export the language file {'>'} Add the translations in the exported file {'>'} Import it back into Zoho Desk</p>
          <div className='multi_tabs'>
            <p className='active_multi'>MULTILINGUAL</p>
            <p>EXPORT HISTORY</p>
            <p>IMPORT HISTORY</p>
          </div>
      </div>

      <div className='multi_data'>
        <div className='data_set'>
            <p className='data_header'>LANGUAGE NAME</p>
            <p className='data'>English</p>
        </div>

        <div className='data_set'>
            <p className='data_header'>LANGUAGE CODE</p>
            <p className='data'>en-US</p>
        </div>

        <div className='data_set'>
            <p className='data_header'>LAST MODIFIED</p>
            <p className='data'>05 Dec 10:39 AM</p>
        </div>

        <div className='data_set'>
            <p className='data_header'>EXPORT</p>
            <p className='data start_export' onClick={switchOpen}>Start</p>
        </div>
      </div>
    </div>
  )
}

export default RightPanel