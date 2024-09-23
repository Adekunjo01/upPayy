import React from 'react'

function CommissionGeneral() {
  return (
    <div>
      <div className='flex flex-row gap-10 items-end'>
<div className='mt-6  ' >
                <h2 className='font-sans text-frm font-medium text-[14px]' >Set commission</h2>
                <p className='font-sans font-normal text-[14px]  text-co' >Set a fixed amount or percentage of the <br /> transaction amount of charges</p>
            </div>
      <div className='flex flex-row m-5 w-[35%]' style={{border:"1px solid gray", borderRadius:"10px"}}>
      
      <div className='p-2' style={{borderRight:"1px solid gray"}}>
        <select className='outline-none font-normal text-[16px] font-sans text-ashh ' >
            <option  className='font-normal text-[16px] font-sans text-ashh outline-none'  >Percentage</option>
        </select>
      </div>
      <input type='text' placeholder='20%' className='pl-3 outline-none w-full'/>

      </div>
</div>
<hr className="border-t-1 border-line w-full  mr-3 mt-5  " /> 
<div className='flex justify-end space-x-2 mt-5' >
    <div className="border border-brd flex items-center    w-[79px] h-[40px] rounded-lg   p-1      ">
        <button className="flex px-3  items-center    ">
          <h2 className="font-medium text-[16px] text-frm font-sans ">
            Cancel
          </h2>
        </button>
      </div>
    <div className="border border-ashhh flex items-center    w-fit h-[40px] rounded-lg   p-2   bg-black   ">
        <button className="flex px-3  items-center    ">
          <h2 className="font-medium text-[16px] text-white font-sans ">
            Update 
          </h2>
        </button>
      </div>
    </div> 
    </div>
  )
}

export default CommissionGeneral
