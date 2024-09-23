import React from 'react'
import Calenderr from "../Assets/calenderrrr.svg";
import Google from "../Assets/google.svg";
import StraightDiv from "../Assets/DividerStraight.svg";
import DownIcon from "../Assets/DownDown.svg";
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";


function Transferclient() {
  const table1= [
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "80273840392",
      Bank: "Access Bank",
      Merchant: "Web",
      Amount: "	₦36150.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "HopePSBank",
      Merchant: "POS",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "GT Bank",
      Merchant: "POS",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "Sterling Bank",
      Merchant: "Web",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "Zenith Bank",
      Merchant: "Web",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "Zenith Bank",
      Merchant: "Web",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "Zenith Bank",
      Merchant: "Web",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "Zenith Bank",
      Merchant: "Web",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "HopePSBank",
      Merchant: "Web",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
    {
      transactionRef:"TM09230396",
      merchantId: "UP09230396",
      Account: "	70273840392",
      Bank: "Zenith Bank",
      Merchant: "Web",
      Amount: "	₦903750.00",
      Date: "	23/09/23,09:11:04"
    },
     
  ]
  return (
    
    <div >
    <h2 className="font-medium text-[20px] font-sans mt-5 ">Transactions</h2>
    <form action="" className="flex justify-between mb-2  mt-3">
        <div className="flex relative items-center justify-between  ">
          <img src={Google} alt="" className="absolute left-[10px]" />
          <input
            type="text"
            placeholder="Search records"
            className="border border-lft rounded-lg pl-[40px]  font-normal text-[16px] w-[412px] h-[44px] shadow-white outline-none   "
          />
            <div className='flex  space-x-4   '  >
            <div  className="border flex items-center justify-between space-x-10 border-lft rounded-lg  font-normal text-[16px] w-[147px] h-[44px] shadow-white ml-96    "  >
            <div className='flex space-x-6 items-center '  >
              <h2 className='pl-2 font-medium text-[16px] text-Bbb ' >Type</h2>
              <img src={StraightDiv} alt="" />
              <div className='flex items-center space-x-2 ' >
                <h2 className='font-medium font-sans text-[16px] text-ashhh ' >All</h2>
                <button><img src={DownIcon}  className='w-[14px] h-[14px]' alt="" /></button>
                
              </div>
            </div>

          </div>
          <div  className="border flex items-center justify-between space-x-10 border-lft rounded-lg  font-normal text-[16px] w-[147px] h-[44px] shadow-white    "  >
            <div className='flex space-x-6 items-center '  >
              <h2 className='pl-2 font-medium text-[16px] text-Bbb ' >Status</h2>
              <img src={StraightDiv} alt="" />
              <div className='flex items-center space-x-2 ' >
                <h2 className='font-medium font-sans text-[16px] text-ashhh ' >All</h2>
                <button><img src={DownIcon}  className='w-[14px] h-[14px]' alt="" /></button>
                
              </div>
            </div>

          </div>
          <div  className="border  space-x-10 border-lft rounded-lg   font-normal text-[16px] w-[147px] h-[44px] shadow-white    "  >
          <div className='flex items-center mt-2 space-x-3 ' >
            <button>
              <img src={Calenderr} alt="" className='ml-3'  />
            </button>
            <h2 className='font-medium text-[14px] text-frm' >Select Date</h2>
            </div>
          </div>
          </div>
          
        </div>
      </form>
      <table className="min-w-full divide-y divide-gray-200  mt-4 ">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <span>TRANSACTION REF</span>
                <div className="space-y-4 ">
                  <a href="/">
                    {" "}
                    <img
                      src={UpArrow}
                      alt="Up Arrow"
                      className="mb-1"
                    />
                  </a>
                  <a href="/">
                    <img src={DownArrown} alt="Down Arrow" />
                  </a>
                </div>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <span>MERCHANT ID</span>
                <div className="space-y-4 ">
                  <a href="/">
                    {" "}
                    <img
                      src={UpArrow}
                      alt="Up Arrow"
                      className="mb-1"
                    />
                  </a>
                  <a href="/">
                    <img src={DownArrown} alt="Down Arrow" />
                  </a>
                </div>
              </div>
            </th>
           
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <span>ACCOUNT NUMBER</span>
                <div className="space-y-20">
                  <a href="/">
                    {" "}
                    <img
                      src={UpArrow}
                      alt="Up Arrow"
                      className="mb-1"
                    />
                  </a>
                  <a href="/">
                    <img src={DownArrown} alt="Down Arrow" />
                  </a>
                </div>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <span>BANK NAME</span>
                <div className="space-y-1">
                  <a href="/">
                    <img
                      src={UpArrow}
                      alt="Up Arrow"
                      className="mb-1"
                    />
                  </a>
                  <a href="/">
                    {" "}
                    <img src={DownArrown} alt="Down Arrow" />
                  </a>
                </div>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <span>MERCHANT TYPE</span>
                <div className="space-y-1">
                  <a href="/">
                    <img
                      src={UpArrow}
                      alt="Up Arrow"
                      className="mb-1"
                    />
                  </a>
                  <a href="/">
                    <img src={DownArrown} alt="Down Arrow" />
                  </a>
                </div>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <span>AMOUNT</span>
                <div className="space-y-1">
                  <a href="/">
                    <img
                      src={UpArrow}
                      alt="Up Arrow"
                      className="mb-1"
                    />
                  </a>
                  <a href="/">
                    {" "}
                    <img src={DownArrown} alt="Down Arrow" />
                  </a>
                </div>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <span>DATE</span>
                <div className="space-y-1">
                  <a href="/">
                    <img
                      src={UpArrow}
                      alt="Up Arrow"
                      className="mb-1"
                    />
                  </a>
                  <a href="/">
                    <img src={DownArrown} alt="Down Arrow" />
                  </a>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {table1.map((item)=> (
            <tr  key={item.id}  >
 <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
               {item.transactionRef}
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            {item.merchantId}
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
              {item.Account}
            </td>
            <td  className="font-medium text-[14px]   pl-4 " >
            {item.Bank}
            </td>
            <td  className="font-medium text-[14px]   pl-6 text-up " >
            {item.Merchant}
            </td>
            <td  className="font-medium text-[14px]   pl-6 text-up " >
            {item.Amount}
            </td>
            <td  className="font-medium text-[14px]   pl-6 text-up " >
            {item.Date}
            </td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  )
}
export default Transferclient