import React from "react";
import Left from "./Left";
import Nav from "./Nav";
import Google from "../Assets/google.svg";
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import EntryF from "../Assets/Show 5.svg";
import ButtonL from "../Assets/ButtonLeft.svg";
import ButtonR from "../Assets/ButtonR.svg";
import { NavLink } from "react-router-dom";
export default function Institution() {
  const table1 = [
    {
      Actions: "Update",
      Bank: "Access Bank",
      Code: "003",
      Slug: "ACC",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Inactive",
    },
    {
      Actions: "Update",
      Bank: " HopePSBank",
      Code: "004",
      Slug: "HPSB",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Active",
    },
    {
      Actions: "Update",
      Bank: "GT Bank",
      Code: "005",
      Slug: "GTB",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Inactive",
    },
    {
      Actions: "Update",
      Bank: "Sterling Bank",
      Code: "006",
      Slug: "STB",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Active",
    },
    {
      Actions: "Update",
      Bank: "Globus Bank",
      Code: "007",
      Slug: "GLB",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Active",
    },
    {
      Actions: "Update",
      Bank: "Providus Bank",
      Code: "008",
      Slug: "PRB",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Active",
    },
    {
      Actions: "Update",
      Bank: "	United Bank of Africa",
      Code: "009",
      Slug: "UBA",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Active",
    },
    {
      Actions: "Update",
      Bank: "	Keystone Bank",
      Code: "010",
      Slug: "KYB",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Active",
    },
    {
      Actions: "Update",
      Bank: " Heritage Bank",
      Code: "011",
      Slug: "HRB",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Active",
    },
    {
      Actions: "Update",
      Bank: "	Zenith Bank",
      Code: "011",
      Slug: "ZRB",
      DateAdded: "	23/09/23, 09:11:04",
      Status: "Active",
    },
  ];
  return (
    <>
      <div className="flex">
        <Left />
        <div className=" w-full">
          <Nav text={"Institution"} />

          <div className="flex justify-between items-center ">
            <div className="ml-10">
              <h2 className="font-medium font-sans text-[24px] text-tran ">
                Institution
              </h2>
              <p className="font-normal text-[15px]  text-mm ">
                This page allows you to manage all Institutions
              </p>
            </div>
            <div className="border border-ashhh  rounded-lg  p-2 mr-4  bg-black  ">
              <NavLink to="/" className="flex p-1  items-center   ">
                <h2 className="font-medium text-[16px] text-white font-sans ">
                  Create new
                </h2>
              </NavLink>
            </div>
          </div>

          <div className="ml-10 mt-5 mr-4  ">
            <div className="w-full h-full rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 mr-14">
              <form action="" className="">
                <div className="flex relative items-center  ">
                  <img src={Google} alt="" className="absolute left-[10px]" />
                  <input
                    type="text"
                    placeholder="Search for institution name, ID etc.."
                    className="border   outline-none border-lft rounded-lg pl-[40px]  font-normal text-[16px] w-[412px] h-[44px] shadow-white "
                  />
                </div>
              </form>

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
                        <span>BANK NAME</span>
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
                        <span>BANK CODE</span>
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
                        <span>SLUG</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>DATE ADDED</span>
                        <div className="space-y-1">
                          <NavLink to="/">
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </NavLink>
                          <NavLink to="/">
                            {" "}
                            <img src={DownArrown} alt="Down Arrow" />
                          </NavLink>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>STATUS</span>
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

                <tbody className="bg-white divide-y divide-gray-200">
                  {table1.map((item) => (
                    <tr key={item.id}>
                      <td className="font-medium text-[14px]    text-bbb pl-6 ">
                        {item.Actions}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                        {item.Bank}
                      </td>
                      <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
                        {item.Code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                        {item.Slug}
                      </td>
                      <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
                        {item.DateAdded}
                      </td>
                      <td>
                      <div
                              className={`rounded-full ${
                                item?.status === "Inactive"
                                  ? "bg-[#FEF3F2]"
                                  : "bg-[#ECFDF3]"
                              }  flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 `}
                            >
                         <div
                                class={`w-[8px] h-[8px] rounded-full ${
                                  item?.status === "Inactive"
                                    ? "bg-danger"
                                    : "bg-green-500"
                                } `}
                              ></div>
                         <h2
                                className={`${
                                  item?.Status === "Inative"
                                    ? "text-[#B42318]"
                                    : "text-[#027A48]"
                                }  text-[12px] font-medium `}
                              >

                            {item.Status}
                          </h2>
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
