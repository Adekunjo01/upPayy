import React from 'react'

function SettingPassword() {
  return (
    <div>
    <div className='mt-7' >
      <h2 className='font-sans font-medium text-[18px] text-ashhhh'  >Password</h2>
    </div>
    <p className='font-sans font-normal text-[14px]  text-co' >Please enter your current password to change  your password</p>
    <hr className="border-t-1 border-line w-full  mr-3 mt-5  " />
    <div>
      <div className='flex items-center ' >
      <label
    htmlFor="email"
    className="font-medium text-[14px] text-frm font-sans "
    required
  >
    Current Password
  </label>{" "}
  <input
    type="password"
    required
    id="email"
    placeholder="******"
    className="border-2 outline-none border-brd w-[512px] mt-2 text-[16px] p-2 font-sans mb-3 font-normal rounded-lg  ml-44  "
  />{" "}
      </div>
      <hr className="border-t-1 border-line w-full  mr-3 mt-5  " />
      <div className='flex items-center ' >
      <label
    htmlFor="email"
    className="font-medium  text-[14px] text-frm font-sans "
    required
  >
    New Password
  </label>{" "}
  <input
    type="password"
    required
    id="email"
    placeholder="******"
    className="border-2 outline-none border-brd w-[512px] mt-2 text-[16px] p-2 font-sans mb-3 font-normal rounded-lg  ml-48  "
  />{" "} 
      </div>
      <hr className="border-t-1 border-line w-full  mr-3 mt-5  " />
      <div className='flex items-center ' >
      <label
    htmlFor="email"
    className="font-medium text-[14px] text-frm font-sans "
    required
  >
    Confirm new password
  </label>{" "}
  <input
    type="password"
    required
    id="email"
    placeholder="******"
    className="border-2 outline-none border-brd w-[512px] mt-2 text-[16px] p-2 font-sans mb-3 font-normal rounded-lg  ml-36  "
  />{" "}
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
            Update password
          </h2>
        </button>
      </div>
    </div>
   
    </div>
  </div>
  )
}

export default SettingPassword
