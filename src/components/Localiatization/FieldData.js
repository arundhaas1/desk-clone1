import React, { useState } from 'react'
import './FieldData.css'
import LocInput from './LocInput'

function FieldData({switchOpen,datas,setDatas,fetchDataFromDB}) {

  const[selectedModule,setSelecetdmoule]=useState("tickets")
  const data = [];

    const updateData = (updatedField) => {
      const { fieldId, translatedValue } = updatedField;

      const existingEntryIndex = data.findIndex(entry => entry.fieldId === fieldId);
    
      if (existingEntryIndex !== -1) {
        data[existingEntryIndex].translatedValue = translatedValue;
      } else {
        data.push({ fieldId, translatedValue });
      }
      };
    
      const handleSave = () => {
        console.log(data,"datais")
        switchOpen();
      };

      const callApi=(module)=>{
        if(data.length>0){
          alert("Save previous contents before switching")
        }
        setSelecetdmoule(module);
        fetchDataFromDB(module)
      }
  return (
    <div className='fielddata'>
        <div className='loc_header'>
            <p>LANGCODE : en-US</p>
            <p className='exit_loc' onClick={switchOpen}>X</p>
        </div>
        <div className='modules'>
            <p onClick={()=>callApi("tickets")} className={`${selectedModule=="tickets" ?"called":"null"}`}>Tickets</p>
            <p onClick={()=>callApi("contacts")} className={`${selectedModule=="contacts"?"called":"null"}`}>Contacts</p>
            <p onClick={()=>callApi("products")} className={`${selectedModule=="products"?"called":"null"}`}>Products</p>
        </div>
        <div className='locedData'>
        {datas.fields.tickets.map(field=>{ 
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