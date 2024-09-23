import React, { useState } from "react";
import Left from "./Left";
import Nav from "./Nav";
import ArrowLLeft from "../Assets/ArrowwLefttt.svg";
import Copyy from "../Assets/copy.svg";
import Hopee from "../Assets/BigHope.svg";
import { NavLink } from "react-router-dom";
import Clientover from "./Clientover";
import Transferclient from "./Transferclient";
import Clist from "./Clist";

export default function ClientOverview() {
    const [overview,setOverview]= useState(true)
    const [transfer,setTransfer]= useState(false)
    const [merchant,setMerchant]= useState(false)
  return (
    <div className="flex">
      <Left />
      <div className="w-full">
        <Nav
          className="text-dash"
          text={"Clients"}
          secondNav={true}
          text2={"Hope PS Bank"}
        />
        <div className="">
          <div className="flex space-x-2 ">
            <NavLink  to="/client" >
            <button>
              <img src={ArrowLLeft} alt="" />
            </button>
            </NavLink>
            <h2 className="font-normal text-geyr   text-[14px] font-sans">
              Back to Clients
            </h2>
          </div>
          <h1 className="font-medium text-[24px] text-ovv ">Hope PS Bank</h1>
          <div className="border space-x-10 border-lft rounded-lg  font-normal  p-4 text-[16px] w-full h-[994px] shadow-white     ">
            <div className="flex justify-between ">
              <div className="flex space-x-5   ">
                <img src={Hopee} className="mb-36" alt="" />
                <div>
                  <div className=" ">
                    <h2 className="font-medium text-[24px] text-num ">
                      Hope Payment <br />
                      Service Bank Ltd
                    </h2>
                    <p className="font-sans text-[16px] font-medium bg-tccc w-fit rounded-lg rounded-rg  ">
                      TR0983748573
                    </p>
                  </div>

                  <div className="mt-2">
                    <h2 className="font-medium text-[14px] text-tggg ">
                      Registration Date
                    </h2>
                    <p className="text-[16px] font-medium text-num font-sans">
                      23-09-2023 16:19:05
                    </p>
                  </div>
                  <div className="mt-2">
                    <h2 className="font-medium text-[14px] text-tggg ">
                      Channel Type
                    </h2>
                    <p className="text-[16px] font-medium text-num font-sans">
                      Multi-Merchant (POS & Web)
                    </p>
                  </div>
                  <div className="mt-2">
                    <h2 className="font-medium text-[14px] text-tggg ">
                      Client Type
                    </h2>
                    <p className="text-[16px] font-medium text-num font-sans">
                      Bank
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-medium text-[14px] text-tggg">
                      Mobile Number
                    </h2>
                    <p className="font-medium text-[16px] text-argu">
                      +234 (0) 901 785 6291{" "}
                    </p>
                  </div>
                  <div className="mt-3 ml-40">
                    <button>
                      <img src={Copyy} alt="Copy icon" />
                    </button>
                  </div>
                </div>
                <div className="flex mt-4 justify-between  ">
                  <div>
                    <h2 className="font-medium text-[14px] text-tggg">
                      Email Address{" "}
                    </h2>
                    <p className="font-medium text-[16px] text-argu">
                      customercare@hopepsbank.com
                    </p>
                  </div>
                  <div className="mt-3 ml-40">
                    <button>
                      <img src={Copyy} alt="Copy icon" />
                    </button>
                  </div>
                </div>
                <div className="flex  mt-4 ">
                  <div>
                    <h2 className="font-medium text-[14px] text-tggg">
                      Address
                    </h2>
                    <p className="font-medium text-[16px] text-argu">
                      1,Idowu Taylor Street, Victoria Island, Lagos{" "}
                    </p>
                  </div>
                  <div className="mt-3 ml-40">
                    <button>
                      <img src={Copyy} alt="Copy icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-x-6  ">
              <button onClick={()=> {
                setOverview(true);
                setTransfer(false);
                setMerchant(false);
              }} >
                <h1 className="font-medium text-[16px] text-co"
                style={{borderBottom:overview? "2px solid black" : ""}}
                >Overview</h1>
              </button>
              <button  
                    onClick={()=> {
                        setOverview(false);
                        setTransfer(true);
                        setMerchant(false);
                      }}
              
              >
                <h1 className="font-medium text-[16px] text-co"
                    style={{borderBottom:transfer? "2px solid black" : ""}}
                >Transfer</h1>
              </button>
              
              
              <button 
                onClick={()=> {
                    setOverview(false);
                    setTransfer(false);
                    setMerchant(true);
                  }}
              >
                <h1 className="font-medium text-[16px] text-co"
                style={{borderBottom:merchant? "2px solid black" : ""}}
                >
                  Merchant List
                </h1>
              </button>
              
              
            </div>
         
             { overview?<Clientover/>:"" }
                {transfer?<Transferclient/>:""}
               {merchant?<Clist/>:""}  
          
          </div>
        </div>
      </div>
    </div>
  );
}
