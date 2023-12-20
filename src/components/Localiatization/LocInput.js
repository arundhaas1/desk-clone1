import React, { useState } from 'react'
import './LocInput.css'

function LocInput({field,updateData}) {
    const[val,setVal]=useState(field.translatedValue)
    const handleInputChange = (e) => {
        const change=e.target.value;
        setVal(change);
        updateData({ ...field, translatedValue: change });
      };
  return (
    <div className='locinput'>
        <p className='apiname'>{field.apiname}</p>
        <p className='equals'>=</p>
        <input className='tv' onChange={handleInputChange}  value={val}/>
    </div>
  )
}

export default LocInput