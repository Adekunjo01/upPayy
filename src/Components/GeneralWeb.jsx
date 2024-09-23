import React from 'react'

function GeneralWeb() {
  return (
    <div>
      <div className='flex items-center space-x-14' >
            <div className='mt-6  ' >
                <h2 className='font-sans text-frm font-medium text-[14px]' >Update account expiry time</h2>
                <p className='font-sans font-normal text-[14px]  text-co' >Set a global expiry time for all terminals</p>
            </div>
            <div className='flex items-center space-x-1 mt-6 ' >
                <button className='w-[64px] rounded-lg  h-[64px] border border-tt font-medium text-[48px] text-tran flex items-center justify-center  ' >2</button>
                <button className='w-[64px] rounded-lg flex items-center justify-center h-[64px] border border-tt font-medium text-[48px] text-tran'  >0</button>
                <p className='font-normal text-[24px] text-gray-500 ' >mins</p>
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

export default GeneralWeb
