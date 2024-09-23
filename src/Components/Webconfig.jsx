import React, { useState } from 'react'
import TerminalWebCl from './TerminalWebCl'
import GeneralWeb from './GeneralWeb'
function Webconfig() {
  const [general,setGeneral]= useState(true);
  const [client,setClient]= useState(false);
  return (
    <div>
    <div className='mt-7' >
<h2 className='font-sans font-medium text-[18px] text-ashhhh'  >Web Terminal Configuration</h2>
</div>
<p className='font-sans font-normal text-[14px]  text-co' >Set a global configuration for all web terminals and per web clients</p>
<hr className="border-t-1 border-line w-full  mr-3 mt-5  " />
<div className="space-x-7 mt-5 " >
<button
      onClick={()=> {
        setGeneral(true);
        setClient(false);
      }}
>
<h1 
  style={{borderBottom:general? "2px solid black" : ""}}
className="font-sans font-medium text-[16px] text-co"  >General</h1>
</button>
<button
  onClick={()=> {
    setGeneral(false);
    setClient(true);
  }}
>
<h1 
  style={{borderBottom:client? "2px solid black" : ""}}
className="font-sans font-medium text-[16px] text-co" >Web Clients</h1>
</button>
</div>
<hr className="border-t-1 border-line w-full  mr-3 mt-5  " />


     { client? <TerminalWebCl/>: ""}
     {  general? <GeneralWeb/> : ""}

        




    </div>
  )
}

export default Webconfig
