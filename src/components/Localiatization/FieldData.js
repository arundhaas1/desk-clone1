import React, { useState } from 'react'
import './FieldData.css'
import LocInput from './LocInput'

function FieldData({switchOpen,datas,setDatas}) {


    const updateData = (updatedField) => {
        const updatedTickets = datas.fields.tickets.map((field) =>
          field.fieldId === updatedField.fieldId ? updatedField : field
        );
    
        setDatas({
          fields: {
            tickets: updatedTickets,
          },
        });
      };
    
      const handleSave = () => {
        console.log('Saving data:', datas);
        switchOpen();
      };
  return (
    <div className='fielddata'>
        <div className='loc_header'>
            <p>LANGCODE : en-US</p>
            <p className='exit_loc' onClick={switchOpen}>X</p>
        </div>
        <div className='modules'>
            <p className='called'>Tickets</p>
            <p>Contacts</p>
            <p>Products</p>
        </div>
        <div className='locedData'>
        {datas.fields.tickets.map(field=>{ 
            console.log(datas.fields.tickets)
            return(
                <LocInput field={field} key={field.fieldId} updateData={updateData}/>
            )
        })}
        </div>

        <div className='form_submit'>
            <p className='submit' onClick={handleSave}>Submit</p>
            <p className='cancel' onClick={switchOpen}>Cancel</p>
        </div>
    </div>
  )
}

export default FieldData