import React, { useState } from 'react'
import './Multilingual.css'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import FieldData from './FieldData'
function Multilingual() {
  const[open,setOpen]=useState(false)
  const[token,setToken]=useState("")
  const switchOpen=()=>{
    setOpen(!open)
  }

  const [datas, setDatas] = useState({
    fields: {
      tickets: [
        {
            apiname:"Loading....",
            fieldId:1,
            translatedValue:"Loading...."
        }
      ],
    },
  });

  const fetchDataFromDB=(module)=>{
    setToken(prompt('Enter oauth token'))
    const url = 'zd/pleasebrovanthuru/api/v1/translationLanguageExports?orgId=19211012';
    const languageCode = 'en_US';
    const type="Field"
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'orgId': '19211012',
        'Authorization': `Zoho-oauthtoken ${token}`,
      },
      body: JSON.stringify({
        languageCode: languageCode,
        module: module,
        type:type
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        setDatas(result)
        console.log(datas);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  return (
    <div className={open?'multilingual opened':'multilingual'}>
      <LeftPanel />
      <RightPanel fetchDataFromDB={fetchDataFromDB} switchOpen={switchOpen}/>
      {open?<FieldData fetchDataFromDB={fetchDataFromDB}  switchOpen={switchOpen} datas={datas} setDatas={setDatas}/>:null} 
    </div>
  )
}

export default Multilingual