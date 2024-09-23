import React from 'react'
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import Google from "../Assets/google.svg";
import Calenderr from "../Assets/calenderrrr.svg";
import Sort from "../Assets/sort.svg";
function ChowdeckTransactions() {

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
    <div>

    <form action="" className="flex justify-between mb-2  mt-3">
      <div className="flex relative items-center justify-between  ">
        <img src={Google} alt="" className="absolute left-[10px]" />
        <input
          type="text"
          placeholder="Search records"
          className="border border-lft rounded-lg pl-[40px]  font-normal text-[16px] w-[412px] h-[44px] shadow-white outline-none   "
        />
        <div className="flex  space-x-4   ">
          <div className="border flex items-center justify-between space-x-10 border-lft rounded-lg ml-96  font-normal  p-2 text-[16px] w-[94px] h-[44px] shadow-white    ">
            <div className="flex space-x-1 items-center ">
              <button>
                <img src={Sort} alt="" />
              </button>
              <h2 className="pl-2 font-medium text-[16px] text-Bbb ">
                Filter
              </h2>
            </div>
          </div>
          <div className="border  space-x-10 border-lft rounded-lg   font-normal text-[16px] w-[240px] h-[44px] shadow-white    ">
            <div className="flex items-center mt-2 space-x-3 ">
              <button>
                <img src={Calenderr} alt="" className="ml-3" />
              </button>
              <h2 className="font-medium text-[14px] text-frm">
                Jan 6,2023 - Jan 13,2023
              </h2>
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
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
                </a>
                <a href="/">
                  <img src={DownArrown} alt="Down Arrow" />
                </a>
              </div>
            </div>
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="flex items-center space-x-1">
              <span>TERMINAL ID</span>
              <div className="space-y-4 ">
                <a href="/">
                  {" "}
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
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
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
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
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
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
              <span>AMOUNT</span>
              <div className="space-y-1">
                <a href="/">
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
                </a>
                <a href="/">
                  <img src={DownArrown} alt="Down Arrow" />
                </a>
              </div>
            </div>
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="flex items-center space-x-1">
              <span>DATE ADDED</span>
              <div className="space-y-1">
                <a href="/">
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
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
              <span>STATUS</span>
              <div className="space-y-1">
                <a href="/">
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
                </a>
                <a href="/">
                  <img src={DownArrown} alt="Down Arrow" />
                </a>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            80273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Access Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦36150.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-rrr flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-danger "></div>
              <h2 className="text-danger  text-[12px] font-medium ">
                Failed
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Hope PS Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">GTBank</td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦210875.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-rrr flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-danger "></div>
              <h2 className="text-danger  text-[12px] font-medium ">
                Failed
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Sterling Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Zenith Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Zenith Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Zenith Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Zenith Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Hope PS Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Zenith Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            TM09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
            70273840392
          </td>
          <td className="font-medium text-[14px]   pl-4 ">
            Zenith Bank
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            ₦903750.00
          </td>
          <td className="font-medium text-[14px]   pl-6 text-up ">
            23/09/23,09:11:04
          </td>
          <td>
            <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
              <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
              <h2 className="text-peace  text-[12px] font-medium ">
                Success
              </h2>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default ChowdeckTransactions
