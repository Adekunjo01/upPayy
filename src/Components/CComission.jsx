import React, { useState } from 'react'
import CommissionGeneral from './CommissionGeneral'
import Comissioncl from './Comissioncl'

function CComission() {
  const [general,setGeneral]=useState(true);
  const [client,setClient]=useState(false)
  return (
    <div>
    <div className='mt-7' >
<h2 className='font-sans font-medium text-[18px] text-ashhhh'  >Commissions</h2>
</div>
<p className='font-sans font-normal text-[14px]  text-co' >Set a global commission for all merchants & clients and per web merchants</p>
<hr className="border-t-1 border-line w-full  mr-3 mt-5  " />
<div className="space-x-7 mt-5 " >
<button
  onClick={()=> {
    setGeneral(true);
    setClient(false);
  }}
>
<h1 className="font-sans font-medium text-[16px] text-co"
    style={{borderBottom:general? "2px solid black" : "" }}
>General</h1>
</button>
<button
  onClick={()=> {
    setGeneral(false);
    setClient(true);
  }}
>
<h1 className="font-sans font-medium text-[16px] text-co" 
    style={{borderBottom:client ? "2px solid black" : "" }}
> Clients</h1>
</button>
</div>
<hr className="border-t-1 border-line w-full  mr-3 mt-3  " />
 

{ general? <CommissionGeneral/> : ""}
{ client? <Comissioncl/>: ""}



    </div>
  )
}

export default CComission
