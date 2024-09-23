import React from "react";
import Left from "./Left";
import Nav from "./Nav";
import ArrowLeft from "../Assets/Arrow - Left.svg";
import Google from "../Assets/google.svg";
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import ButtonL from "../Assets/ButtonLeft.svg";
import ButtonR from "../Assets/ButtonR.svg";
import ten from "../Assets/10(ten).svg";
import Vector from "../Assets/cloud-download.svg";
import StraightDiv from "../Assets/DividerStraight.svg";
import DownIcon from "../Assets/DownDown.svg";
import Calenderr from "../Assets/calenderrrr.svg";
export default function Transaction() {
  const text = "Transactions";
  const table1 = [
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Korede Suliamon",
      MerchantType: "Web",
      AccountType: "Dynamic",
      Settlement: "Instant",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Anthony Chaizor",
      MerchantType: "Web",
      AccountType: "Dynamic",
      Settlement: "Hourly",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Korede Suliamon",
      MerchantType: "Web",
      AccountType: "Static",
      Settlement: "t+1",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Saheed Abiodun",
      MerchantType: "POS",
      AccountType: "Static",
      Settlement: "Instant",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Segun Peters",
      MerchantType: "Web",
      AccountType: "Dynamic",
      Settlement: "Instant",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Segun Johnson",
      MerchantType: "POS",
      AccountType: "Static",
      Settlement: "Hourly",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Segun Johnson",
      MerchantType: "Web",
      AccountType: "Dynamic",
      Settlement: "t+1",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Segun Johnson",
      MerchantType: "Web",
      AccountType: "Dynamic",
      Settlement: "Instant",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Segun Johnson",
      MerchantType: "POS",
      AccountType: "Static",
      Settlement: "t+1",
    },
    {
      TransactionRef: "UP09230396",
      ClientID: "UP09230396",
      MerchantID: "	UP09230396",
      ClName: "Segun Johnson",
      MerchantType: "POS",
      AccountType: "Static",
      Settlement: "t+1",
    },
  ];
  return (
    <>
      <div className="flex">
        <Left />
        <div className=" w-full">
          <Nav text={text} />
          <div className="flex justify-between items-center ">
            <div className="ml-10">
              <h2 className="font-medium font-sans text-[24px] text-tran ">
                Transactions
              </h2>
              <p className="font-normal text-[15px]  text-mm ">
                This page allows you to manage all transaction
              </p>
            </div>
            <div className="border border-ashhh  rounded-lg  p-2 mr-10 ">
              <a href="/" className="flex space-x-2 ">
                <img src={Vector} alt="" />
                <h2 className="font-medium text-[16px] text-ashhh ">
                  Download CSV
                </h2>
              </a>
            </div>
          </div>
          <div className="ml-10 mt-5 mr-4  ">
            <div className="w-full h-[full] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 mr-14">
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-[20px] text-tch font-sans ">
                  New Client List
                </h2>
                <div className="">
                  <a
                    href="/"
                    className="flex border border-lft rounded-lg p-2 space-x-3 "
                  >
                    <button className="font-medium text-[14px]">See All</button>
                    <img src={ArrowLeft} alt="" />
                  </a>
                </div>
              </div>
              <form action="" className="flex justify-between mb-2  mt-3">
                <div className="flex relative items-center justify-between  ">
                  <img src={Google} alt="" className="absolute left-[10px]" />
                  <input
                    type="text"
                    placeholder="Search records"
                    className="border border-lft rounded-lg pl-[40px]  font-normal text-[16px] w-[412px] h-[44px] shadow-white outline-none   "
                  />
                  <div className="flex  space-x-4   ">
                    <div className="border flex items-center justify-between space-x-10 border-lft rounded-lg ml-80  font-normal text-[16px] w-[197px] h-[44px] shadow-white    ">
                      <div className="flex space-x-3 items-center ">
                        <h2 className="pl-2 font-medium text-[16px] text-Bbb ">
                          Channel Type
                        </h2>
                        <img src={StraightDiv} alt="" />
                        <div className="flex items-center space-x-2 ">
                          <h2 className="font-medium font-sans text-[16px] text-ashhh ">
                            All
                          </h2>
                          <button>
                            <img
                              src={DownIcon}
                              className="w-[14px] h-[14px]"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border flex items-center justify-between space-x-10 border-lft rounded-lg  font-normal text-[16px] w-[147px] h-[44px] shadow-white    ">
                      <div className="flex space-x-6 items-center ">
                        <h2 className="pl-2 font-medium text-[16px] text-Bbb ">
                          Status
                        </h2>
                        <img src={StraightDiv} alt="" />
                        <div className="flex items-center space-x-2 ">
                          <h2 className="font-medium font-sans text-[16px] text-ashhh ">
                            All
                          </h2>
                          <button>
                            <img
                              src={DownIcon}
                              className="w-[14px] h-[14px]"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border  space-x-10 border-lft rounded-lg   font-normal text-[16px] w-[147px] h-[44px] shadow-white    ">
                      <div className="flex items-center mt-2 space-x-3 ">
                        <button>
                          <img src={Calenderr} alt="" className="ml-3" />
                        </button>
                        <h2 className="font-medium text-[14px] text-frm">
                          Select Date
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
                        <span>CLIENT ID</span>
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
                        <span>CLIENT NAME</span>
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
                        <span>ACCOUNT TYPE</span>
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
                        <span>SETTLEMENT</span>
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
                  {table1.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                        {item.TransactionRef}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                        {item.ClientID}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                        {item.MerchantID}
                      </td>
                      <td className="font-medium text-[14px]  text-bbb pl-4 ">
                        {item.ClName}
                      </td>
                      <td className="font-medium text-[14px]   pl-6 text-up ">
                        {item.MerchantType}
                      </td>
                      <td className="font-medium text-[14px]   pl-6 text-up ">
                        {item.AccountType}
                      </td>
                      <td className="font-medium text-[14px]   pl-6 text-up ">
                        {item.Settlement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between mt-3 ">
                <h2 className="text-[14px] font-medium font-sans text-tt ">
                  Showing 1-10 of 100 entries
                </h2>
                <div className="flex  mr-16 space-x-3 ">
                  <h1 className="text-[14px] font-medium font-sans text-tt ">
                    Show
                  </h1>
                  <img src={ten} alt="" />
                  <h2 className="text-[14px] font-medium font-sans text-tt ">
                    entries
                  </h2>
                  <div className="flex items-center space-x-2 ">
                    <button>
                      <img src={ButtonL} alt="" />
                    </button>
                    <h1 className="text-[14px] font-medium font-sans text-tt ">
                      1
                    </h1>
                    <button>
                      <img src={ButtonR} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
