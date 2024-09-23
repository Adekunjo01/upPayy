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
import Calenderr from "../Assets/calenderrrr.svg";
import Niyi from "../Assets/Niyi.svg";
import Kemi from "../Assets/Kemi.svg";
import Seyi from "../Assets/Seyii.svg";
import Demi from "../Assets/DEMIIIIII.svg";
import Chow from "../Assets/CHOWDECK.svg";
import Jumia from "../Assets/JUMIA.svg";
import GLovo from "../Assets/Glovo.svg";
import Pamilerin from "../Assets/Pam.svg";
import Bolt from "../Assets/Bolt.svg";
import Sort from "../Assets/sort.svg";
export default function Clients() {
  return (
    <>
      <div className="flex">
        <Left />
        <div className=" w-full">
          <Nav text={"Merchants"} />
          <div className="flex items-center justify-between ">
            <div className="ml-10">
              <h2 className="font-medium font-sans text-[24px] text-tran ">
                POS Merchants
              </h2>
              <p className="font-normal text-[15px]  text-mm ">
                This page allows you to manage all Clients
              </p>
            </div>
            <div className="flex items-center mr-4 space-x-2  ">
              <div className="border flex items-center justify-between space-x-10 border-lft  rounded-lg   font-normal text-[16px] w-[129px] h-[44px] shadow-white    ">
                <div className="flex  ">
                  <button className="flex items-center space-x-2 p-2  rounded-lg ">
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
            </div>
          </div>
          <div className="ml-10 mt-5 mr-4  ">
            <div className="w-full h-[full] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 mr-14   ">
              <div className=" ">
                <form action="" >
                  <div className="flex relative items-center justify-between  ">
                    <img src={Google} alt="" className="absolute left-[10px]" />
                    <input
                      type="text"
                      placeholder="Search for merchant name, ID,terminals,etc"
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
                        <span>MERCHANT ID</span>
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
                        <span>MERCHANT NAME</span>
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
                        <span>ADDRESS</span>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>ASSIGNED CLIENT</span>
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
                  <tr>
                    <NavLink to="/chowdeck">
                      <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                        View details
                      </td>
                    </NavLink>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Chow} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Chowdeck
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            help@chowdeck.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up   ">
                      243 Herbert Macaulay, Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Demi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Demilade Faneye
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            demi@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Jumia} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Jumia
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            info@jumia.org
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay, Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Seyi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Seyi Tinubu
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            seyi@lagos.org
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={GLovo} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Glovo
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            info@glovofood.org
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Pamilerin} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Pamilerin Adegoke
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            a.pamilerin@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Bolt} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Bolt
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            hi@bolt.org
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Niyi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Niyi Afolabi
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            niyi@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={GLovo} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Glovo
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            info@glovofoods.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Kemi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Kemisola Ogunyemi
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            kemi@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Bolt} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Bolt
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            hi@bolt.org
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Kemi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Kemisola Ogunyemi
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            kemi@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Jumia} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Jumia
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            info@jumia.org
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Seyi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Seyi Tinubu
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            seyi@lagos.org
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Bolt} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Bolt
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            hi@bolt.org
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Kemi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Kemisola Ogunyemi
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            kemi@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Bolt} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Bolt
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            hi@bolt.org
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Kemi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Kemisola Ogunyemi
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            kemi@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-bbb ">
                      View details
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      UP09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Bolt} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Bolt
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            hi@bolt.org
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                      243 Herbert Macaulay Yaba, Lagos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img src={Demi} alt="" />
                        <div>
                          <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                            Demilade Faneye
                          </h2>
                          <p className="text-[12px] font-normal text-co ">
                            kemi@email.com
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
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
