import React, { useState } from "react";
import Left from "./Left";
import Nav from "./Nav";
import ArrowLLeft from "../Assets/ArrowwLefttt.svg";
import { NavLink } from "react-router-dom";
import MIDD from "./MIDD";
import ChowdeckOver from "./ChowdeckOver";
import ChowdeckTransactions from "./ChowdeckTransactions";
import TerminalChowdeck from "./TerminalChowdeck";
export default function Chowdeck() {
    const [overview, setOverview] = useState(true)
    const [transaction, setTransactions] = useState(false)
    const [terminal, setTerminal] = useState(false)
  return (
    <div className="flex  ">
      <Left />
      <div className="w-full">
        <Nav
          className="text-dash"
          text={"Merchants"}
          secondNav={true}
          text2={"POS Merchants"}
          text3={"Chowdeck"}
        />
        <div className="ml-4">
          <div className="flex space-x-2 ">
            <NavLink to="/merchant">
              <button>
                <img src={ArrowLLeft} alt="" />
              </button>
            </NavLink>
            <h2 className="font-normal text-geyr   text-[14px] font-sans">
              Back to POS Merchants
            </h2>
          </div>
          <h1 className="font-medium text-[24px] text-ovv ">Chowdeck</h1>
          <div className="border space-x-10 border-lft rounded-lg  font-normal  p-6 text-[16px] w- h-[994px] shadow-white     ">
            <MIDD />
            <div className="space-x-6">
                <button onClick={()=>{
                    setOverview(true);
                    setTransactions(false)
                    setTerminal(false)
                }}>
                <h1 className="font-medium text-[16px] text-co pb-2"
                 style={{borderBottom:overview ? "4px solid black":""}}
                >Overview</h1>
              </button>
              
                <button
                 onClick={()=>{
                    setOverview(false);
                    setTransactions(true)
                    setTerminal(false)
                }}

                >
                  <h1 className="font-medium text-[16px] text-co"
                  style={{borderBottom:transaction ? "4px solid black":""}}
                  >
                    Transactions
                  </h1>
                </button>
                <button
                 onClick={()=>{
                    setOverview(false);
                    setTransactions(false)
                    setTerminal(true)
                }}
                >
                  <h1 className="font-medium text-[16px] text-co"
                  style={{borderBottom:terminal ? "4px solid black":""}}
                  >Terminal</h1>
                </button>
            </div>
            <div className="flex justify-between items-center mt-6">
              <h2 className="font-medium text-[20px] font-sans">Overview</h2>
              <div>
                <ul className="flex list-none">
                  <li className="page-item">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300  font-medium  rounded-l text-[14px]  hover:bg-ovv hover:text-white  text-avcnt "
                      to="/"
                    >
                      12 months
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300 font-medium text-[14px]   text-avcnt hover:bg-ovv  hover:text-white "
                      to="/"
                    >
                      30 days
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300 rounded-r  font-medium  font-sans text-[14px]  text-avcnt hover:bg-ovv   hover:text-white "
                      to="/"
                    >
                      7 days
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="mt-10  flex space-x-3 ">
              <div className="w-1/4">
                <div className="w-full h-[454px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5    ">
                  <h1 className="font-sans font-medium text-[18px] mb-6">
                    Statistics
                  </h1>
                  <div className="flex items-center justify-between mb-10 ">
                    <div>
                      <h1 className="font-medium text-[14px] font-sans text-co ">
                        Total Transaction Count
                      </h1>
                      <p className="font-semibold text-[22px] font-sans text-co ">
                        530,291
                      </p>
                    </div>
                    <img src={Bank} alt="" />
                  </div>
                  <img src={Line} alt="" className="mb-5" />
                  <div className="flex items-center justify-between mb-10 ">
                    <div>
                      <h1 className="font-medium text-[14px] font-sans text-co ">
                        Total Revenue
                      </h1>
                      <p className="font-semibold text-[22px] font-sans text-co ">
                        ₦5,280,283.90
                      </p>
                    </div>
                    <img src={Bank} alt="" />
                  </div>
                  <img src={Line} alt="" className="mb-5" />
                  <div className="flex items-center justify-between  mt-10 ">
                    <div>
                      <h1 className="font-medium text-[14px] font-sans text-co ">
                        Account No. Generated
                      </h1>
                      <p className="font-semibold text-[22px] font-sans text-co ">
                        4
                      </p>
                    </div>
                    <img src={Bank} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-3/4">
                <div className="w-full h-[454px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5">
                  <ApexChart />
                </div>
              </div>
            </div> */}
           {overview ? <ChowdeckOver/>:""}
            {transaction ?<ChowdeckTransactions/>:""}
            {terminal ?<TerminalChowdeck/>:""}
          </div>
        </div>
      </div>
    </div>
  );
}
