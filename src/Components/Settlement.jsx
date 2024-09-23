import React from "react";
import Left from "./Left";
import Nav from "./Nav";
import Vector from "../Assets/cloud-download.svg";
import Bank from "../Assets/home-4.svg";
import Google from "../Assets/google.svg";
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import EntryF from "../Assets/Show 5.svg";
import ButtonL from "../Assets/ButtonLeft.svg";
import ButtonR from "../Assets/ButtonR.svg";
import StraightDiv from "../Assets/DividerStraight.svg";
import DownIcon from "../Assets/DownDown.svg";
import Calenderr from "../Assets/calenderrrr.svg";
import { NavLink } from "react-router-dom";
export default function Settlement() {
  const table1 = [
    {
      TransactionRef: "UP09230396",
      Clname: "HopePS Bank",
      MaName: "Anthony Chaizor",
      Type: "Percentage",
      Commission: "2",
      Amount: "₦36150.000",
      Amounts: "₦36150.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "Sterling Bank",
      MaName: "Korede Suliamon",
      Type: "Fixed",
      Commission: "200,000",
      Amount: "₦903750.000",
      Amounts: "₦903750.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "Zenith Bank",
      MaName: "Saheed Abiodun",
      Type: "Percentage",
      Commission: "10",
      Amount: "₦210875.000",
      Amounts: "₦210875.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "	Titus Trust Boys",
      MaName: "Segun Peters",
      Type: "Percentage",
      Commission: "10",
      Amount: "₦120500.000",
      Amounts: "₦120500.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "CIT MFB",
      MaName: "Segun Johnson",
      Type: "Fixed",
      Commission: "3",
      Amount: "₦120500.000",
      Amounts: "₦120500.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "Asson MFB",
      MaName: "Segun Johnson",
      Type: "Percentage",
      Commission: "1",
      Amount: "₦120500.000",
      Amounts: "₦120500.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "GT Bank",
      MaName: "Segun Johnson",
      Type: "Fixed",
      Commission: "20,0000",
      Amount: "₦120500.000",
      Amounts: "₦120500.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "Access Bank",
      MaName: "Segun Johnson",
      Type: "Fixed",
      Commission: "20,000",
      Amount: "₦120500.000",
      Amounts: "₦120500.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "Providus Bank",
      MaName: "Segun Johnson",
      Type: "Percentage",
      Commission: "2.5",
      Amount: "₦120500.000",
      Amounts: "₦120500.000",
    },
    {
      TransactionRef: "UP09230396",
      Clname: "United Bank of Africa",
      MaName: "Segun Johnson",
      Type: "Percentage",
      Commission: "3",
      Amount: "₦120500.000",
      Amounts: "₦120500.000",
    },
  ];

  return (
    <>
      <div className="flex">
        <Left />
        <div className=" w-full">
          <Nav text={"Settlement"} />
          <div>
            <div className="flex justify-between items-center mb-3 ">
              <div className="ml-10">
                <h2 className="font-medium font-sans text-[24px] text-tran ">
                  Settlement
                </h2>
                <p className="font-normal text-[15px]  text-mm ">
                  This page allows you to manage all settlement{" "}
                </p>
              </div>
              <div className="border border-ashhh  rounded-lg   p-2 mr-4 ">
                <NavLink to="" className="flex space-x-2 ">
                  <img src={Vector} alt="" />
                  <h2 className="font-medium text-[16px] text-ashhh ">
                    Download CSV
                  </h2>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="ml-10 flex justify-between">
            <div className="w-[543px] h-full rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5   ">
              <img src={Bank} alt="" />
              <h2 className="text-[14px] font-sans  font-medium text-co">
                Settlement Count
              </h2>
              <h1 className="text-[24px]  font-semibold text-num font-sans">
                530,291
              </h1>
            </div>
            <div className="w-[543px] h-full rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 mr-4   ">
              <img src={Bank} alt="" />
              <h2 className="text-[14px] font-sans  font-medium text-co">
                Settlement Amount
              </h2>
              <h1 className="text-[24px]  font-semibold text-num font-sans">
                ₦5,280,283.90
              </h1>
            </div>
          </div>
          <div className="ml-10 mt-5 mr-4  ">
            <div className="w-full h-[full] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 mr-14   ">
              <div className=" ">
                <form action="" className="flex justify-between">
                  <div className="flex relative items-center justify-between  ">
                    <img src={Google} alt="" className="absolute left-[10px]" />
                    <input
                      type="text"
                      placeholder="Search for settlement type,client name e.t.c.. "
                      className="border border-lft rounded-lg pl-[40px]  font-normal text-[16px] w-[412px] h-[44px] shadow-white outline-none   "
                    />
                    <div className="flex  space-x-4   ">
                      <div className="border flex items-center justify-between space-x-10 border-lft rounded-lg ml-80  font-normal text-[16px] w-[147px] h-[44px] shadow-white    ">
                        <div className="flex space-x-6 items-center ">
                          <h2 className="pl-2 font-medium text-[16px] text-Bbb ">
                            Bank
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
                            Type
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
              </div>
              <table className="min-w-full divide-y divide-gray-200  mt-4 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>TRANSACTION REF</span>
                        <div className="space-y-4 ">
                          <NavLink to="">
                            {" "}
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="">
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>CLIENT NAME</span>
                        <div className="space-y-4 ">
                          <NavLink to="">
                            {" "}
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="">
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>MERCHANT NAME</span>
                        <div className="space-y-20">
                          <NavLink to="">
                            {" "}
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="">
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>TYPE</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>COMMISSION AMT</span>
                        <div className="space-y-1">
                          <NavLink to="">
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="">
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>AMOUNT RECEIVED</span>
                        <div className="space-y-1">
                          <NavLink to="">
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="">
                            {" "}
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>AMOUNTS</span>
                        <div className="space-y-1">
                          <NavLink to="">
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="">
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
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
                      <td className="font-medium text-[14px]  text-bbb pl-6 ">
                        {item.Clname}
                      </td>
                      <td className="font-medium text-[14px]  text-bbb pl-6 ">
                        {item.MaName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                        {item.Type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                        {item.Commission}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                        {item.Amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                        {item.Amounts}
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
                  <img src={EntryF} alt="" />
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
