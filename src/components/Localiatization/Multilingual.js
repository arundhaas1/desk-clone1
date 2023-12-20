import React, { useState } from 'react'
import './Multilingual.css'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import FieldData from './FieldData'
function Multilingual() {
  const[open,setOpen]=useState(false)
  const switchOpen=()=>{
    setOpen(!open)
  }

  const [datas, setDatas] = useState({
    fields: {
      tickets: [
        {
            apiname:"contactID",
            fieldId:1,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:2,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:3,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:4,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:5,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:6,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:7,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:8,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:9,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:10,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:11,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:12,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:13,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:14,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:15,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:16,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:17,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:18,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:19,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:20,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:21,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:22,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:23,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:24,
            translatedValue:"testing"
        },{
            apiname:"contactID",
            fieldId:25,
            translatedValue:"testing"
        }
      ],
    },
  });
  return (
    <div className={open?'multilingual opened':'multilingual'}>
      <LeftPanel />
      <RightPanel switchOpen={switchOpen}/>
      {open?<FieldData switchOpen={switchOpen} datas={datas} setDatas={setDatas}/>:null} 
    </div>
  )
}

export default Multilingual