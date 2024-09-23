import React from "react";
import Left from "./Left";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import Vector from "../Assets/cloud-download.svg";
import DownIcon from "../Assets/DownDown.svg";
import Google from "../Assets/google.svg";
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import EntryF from "../Assets/Show 5.svg";
import ButtonL from "../Assets/ButtonLeft.svg";
import ButtonR from "../Assets/ButtonR.svg";
import StraightDiv from "../Assets/DividerStraight.svg";
import Calenderr from "../Assets/calenderrrr.svg";
import Netflix from "../Assets/image 107.svg";
import Amazon from "../Assets/image 109.svg";
import Prime from "../Assets/image 108.svg";
import Kuda from "../Assets/image 111.svg";
import Multichoice from "../Assets/image 110.svg";
import Twelve from "../Assets/12.svg";
import Hope from "../Assets/hope-bank-payment-service-logo.839b6438 1.svg";
import Niyi from "../Assets/Niyi.svg";
import Kemi from "../Assets/Kemi.svg";
import Seyi from "../Assets/Seyii.svg";
export default function Clients() {

const table1= [
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Hope,
      title:"HopePSBank",
      email:"customare@hopebank.com",
    },
    category: "Bank",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Niyi,
      title:"Niyi Afolabi",
      email:"niyi@email.com",
    },
    category: "Aggregator",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Kemi,
      title:"Kemisola Ogunyemi",
      email:"kemi@email.com",
    },
    category: "PTSP",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Seyi,
      title:"Seyi Tinubu",
      email:"seyi@lagos.org",
    },
    category: "Aggregator",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Seyi,
      title:"Seyi Tinubu",
      email:"seyi@lagos.org",
    },
    category: "Aggregator",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Seyi,
      title:"Seyi Tinubu",
      email:"seyi@lagos.org",
    },
    category: "Aggregator",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Seyi,
      title:"Seyi Tinubu",
      email:"seyi@lagos.org",
    },
    category: "Aggregator",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Seyi,
      title:"Seyi Tinubu",
      email:"seyi@lagos.org",
    },
    category: "Aggregator",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Seyi,
      title:"Seyi Tinubu",
      email:"seyi@lagos.org",
    },
    category: "Aggregator",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  },
  {
    Actions: "View details",
    ClientId:"UP09230396",
    clName: {
      img:Seyi,
      title:"Seyi Tinubu",
      email:"seyi@lagos.org",
    },
    category: "Aggregator",
    totalRevenue:"₦903750.00",
    slug:"Slug1",
    merchant: {
      img1:Netflix,
      img2:Amazon,
      img3:Prime,
      img4:Kuda,
      img5:Multichoice,
      img6:Twelve
    }
  }
]

  return (
    <>
      <div className="flex">
        <Left />
        <div className=" w-full">
          <Nav text={"Clients"} />

          <div className="flex items-center justify-between ">
            <div className="ml-10">
              <h2 className="font-medium font-sans text-[24px] text-tran ">
                Clients
              </h2>
              <p className="font-normal text-[15px]  text-mm ">
                This page allows you to manage all Clients
              </p>
            </div>
            <div className="flex items-center mr-4 space-x-2  ">
              <div className="border flex items-center justify-between space-x-10 border-lft    font-normal text-[16px] w-[129px] h-[44px] shadow-white rounded-lg   ">
                <div className="flex  ">
                  <button className="flex items-center space-x-2 p-2">
                    <img src={Vector} alt="" />
                    <div className="flex space-x-1">
                      <h2 className="font-medium text-[14px]">Export</h2>
                      <button>
                        <img src={DownIcon} alt="" />
                      </button>
                    </div>
                  </button>
                </div>
              </div>
              <div className="border border-ashhh flex items-center    w-[135px] h-[46px] rounded-lg   p-1   bg-black   ">
                <button className="flex px-3  items-center    ">
                  <h2 className="font-medium text-[16px] text-white font-sans ">
                    Create new
                  </h2>
                </button>
              </div>
            </div>
          </div>
          <div className="ml-10 mt-5 mr-4  ">
            <div className="w-full h-[full] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 mr-14   ">
              <div className=" ">
                <form action=""  >
                  <div className="flex relative items-center justify-between  ">
                    <img src={Google} alt="" className="absolute left-[10px]" />
                    <input
                      type="text"
                      placeholder="Search for settlement type,client name e.t.c.. "
                      className="border border-lft rounded-lg pl-[40px]  font-normal text-[16px] w-[412px] h-[44px] shadow-white outline-none   "
                    />
                    <div className="flex  space-x-4   ">
                      <div className="border flex items-center justify-between space-x-10 border-lft rounded-lg ml-96  font-normal text-[16px] w-[147px] h-[44px] shadow-white    ">
                        <div className="flex space-x-2 items-center ">
                          <h2 className="pl-2 font-medium text-[16px] text-Bbb ">
                            Category
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
                        <span>ACTIONS</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>CLIENT ID</span>
                        <div className="space-y-4 ">
                          <NavLink to="/">
                            {" "}
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="/">
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>CLIENT NAME</span>
                        <div className="space-y-20">
                          <NavLink to="/">
                            {" "}
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="/">
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>CATEGORY</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>TOTAL REVENUE</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>SLUG</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>MERCHANTS</span>
                        <div className="space-y-1">
                          <NavLink to="/">
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="/">
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table1.map((item)=> (
                    <tr key={item.id} >
                        <NavLink to="/clientoverview" >
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      {item.Actions}
                    </td>
                    </NavLink> 
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      {item.ClientId}
                    </td> 
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={item.clName.img} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            {item.clName.title}
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            {item.clName.email}
                          </p>
                        </div>
                      </div>
                    </td> 
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      {item.totalRevenue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      {item.slug}
                    </td>
                    <td>
                      <div className="flex  ">
                        <img src={item.merchant.img1} alt="" />
                        <img src={item.merchant.img2} alt="" className="m-[-10px]" />
                        <img src={item.merchant.img3} alt="" />
                        <img src={item.merchant.img4} alt="" className="m-[-10px]" />
                        <img src={item.merchant.img5} alt="" />
                        <img src={item.merchant.img6} alt="" className="m-[-10px]" />
                      </div>
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
