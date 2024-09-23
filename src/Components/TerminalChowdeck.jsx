import React from 'react'
import Google from "../Assets/google.svg";
import Calenderr from "../Assets/calenderrrr.svg";
import Sort from "../Assets/sort.svg";
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import threeO from "../Assets/fpp.svg";
function TerminalChowdeck() {
  return (
    <div>
           <div className="">
            <h1 className="font-sans font-medium text-[20px] text-ovv mt-3 ">
              Terminals
            </h1>
          </div>
          <div>
            <form action="" className="flex justify-between mb-2  mt-3">
              <div className="flex relative items-center justify-between  ">
                <img src={Google} alt="" className="absolute left-[10px]" />
                <input
                  type="text"
                  placeholder="Search Terminal Id"
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
                  <div className="border  space-x-10 border-lft rounded-lg   font-normal text-[16px] w-full h-[44px] shadow-white    ">
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
            <div>
              <table className="min-w-full divide-y divide-gray-200  mt-4 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>TERMINAL ID</span>
                        <div className="space-y-4 ">
                          <a href="">
                            {" "}
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </a>
                          <a href="">
                            <img src={DownArrown} alt="Down Arrow" />
                          </a>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>ACCOUNT NUMBER</span>
                        <div className="space-y-4 ">
                          <a href="">
                            {" "}
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </a>
                          <a href="">
                            <img src={DownArrown} alt="Down Arrow" />
                          </a>
                        </div>
                      </div>
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>BANK NAME</span>
                        <div className="space-y-20">
                          <a href="">
                            {" "}
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </a>
                          <a href="">
                            <img src={DownArrown} alt="Down Arrow" />
                          </a>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>DATE ADDED</span>
                        <div className="space-y-1">
                          <a href="">
                            <img
                              src={UpArrow}
                              alt="Up Arrow"
                              className="mb-1"
                            />
                          </a>
                          <a href="">
                            {" "}
                            <img src={DownArrown} alt="Down Arrow" />
                          </a>
                        </div>
                      </div>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center space-x-1">
                        <span>ACCOUNT EXPIRY TIME</span>
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
                        <span>STATUS</span>
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
                        <span>ACTIONS</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      TM09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      70273840390
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      Access Bank
                    </td>
                    <td className="font-medium text-[14px]   pl-4 ">
                      23/09/23, 09:11:04
                    </td>
                    <td className="font-medium text-[14px]   pl-6 text-up ">
                      00hr:20min:00sec
                    </td>
                    <td>
                      <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
                        <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
                        <h2 className="text-peace  text-[12px] font-medium ">
                          Active
                        </h2>
                      </div>
                    </td>
                    <td className="pl-14">
                      <img src={threeO} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      TM09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      70273840390
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      HopePS Bank
                    </td>
                    <td className="font-medium text-[14px]   pl-4 ">
                      23/09/23, 09:11:04
                    </td>
                    <td className="font-medium text-[14px]   pl-6 text-up ">
                      00hr:20min:00sec
                    </td>
                    <td>
                      <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
                        <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
                        <h2 className="text-peace  text-[12px] font-medium ">
                          Active
                        </h2>
                      </div>
                    </td>
                    <td className="pl-14">
                      <img src={threeO} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      TM09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      70273840390
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      GTBank
                    </td>
                    <td className="font-medium text-[14px]   pl-4 ">
                      23/09/23, 09:11:04
                    </td>
                    <td className="font-medium text-[14px]   pl-6 text-up ">
                      00hr:20min:00sec
                    </td>
                    <td>
                      <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
                        <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
                        <h2 className="text-peace  text-[12px] font-medium ">
                          Active
                        </h2>
                      </div>
                    </td>
                    <td className="pl-14">
                      <img src={threeO} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      TM09230396
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      70273840390
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                      Sterling Bank
                    </td>
                    <td className="font-medium text-[14px]   pl-4 ">
                      23/09/23, 09:11:04
                    </td>
                    <td className="font-medium text-[14px]   pl-6 text-up ">
                      00hr:20min:00sec
                    </td>
                    <td>
                      <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 ">
                        <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
                        <h2 className="text-peace  text-[12px] font-medium ">
                          Active
                        </h2>
                      </div>
                    </td>
                    <td className="pl-14">
                      <img src={threeO} alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    </div>
  )
}

export default TerminalChowdeck
