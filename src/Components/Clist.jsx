import React from 'react'
import Google from "../Assets/google.svg";
import { NavLink } from "react-router-dom";
import Calenderr from "../Assets/calenderrrr.svg";
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import Pamilerin from "../Assets/Pam.svg";
import Niyi from "../Assets/Niyi.svg";
import Kemi from "../Assets/Kemi.svg";
import Seyi from "../Assets/Seyii.svg";
import Bolt from "../Assets/Bolt.svg";
import Jumia from "../Assets/JUMIA.svg";
import Chow from "../Assets/CHOWDECK.svg";
import Glovo from "../Assets/Glovo.svg";
function Clist() {
  return (
    <div>
    <div>
      <h2 className="font-medium text-[20px] font-sans mt-5 ">
        Merchant
      </h2>
    </div>
    <div className="flex space-x-11">
      <form action="" className="flex space-x-4">
        <div className="flex relative items-center justify-between w-full">
          <img src={Google} alt="" className="absolute left-[10px]" />
          <input
            type="text"
            placeholder="Search for merchant name, ID"
            className="border border-lft rounded-lg pl-[40px] font-normal text-[16px] w-[412px] h-[44px] shadow-white outline-none"
          />
          <div className="flex space-x-4">
            <div className="flex items-center border space-x-3 border-lft rounded-lg font-normal text-[16px] w-[240px] h-[44px] shadow-white">
              <button>
                <img src={Calenderr} alt="" className="ml-3" />
              </button>
              <h2 className="font-medium text-[14px] text-frm">
                Jan 6,2023 - Jan 13,2023
              </h2>
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
              <div className="space-y-20">
                <NavLink to="/">
                  {" "}
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
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
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
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
                  <img src={UpArrow} alt="Up Arrow" className="mb-1" />
                </NavLink>
                <NavLink to="/">
                  {" "}
                  <img src={DownArrown} alt="Down Arrow" />
                </NavLink>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
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

          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Pamilerin} alt="" />
              <div>
                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                  Pamilerin Adegoke
                </h2>
                <p className="text-[12px] font-normal text-co ">
                  NavLink.pamilerin@email.com
                </p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
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
                  info@jumia.com
                </p>
              </div>
            </div>
          </td>
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
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
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Glovo} alt="" />
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
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Pamilerin} alt="" />
              <div>
                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                  Pamilerin Adegoke
                </h2>
                <p className="text-[12px] font-normal text-co ">
                  pamilerin@email.com
                </p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
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
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
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
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
            UP09230396
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Glovo} alt="" />
              <div>
                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                  Glovo
                </h2>
                <p className="text-[12px] font-normal text-co ">
                  info@glovofood.com
                </p>
              </div>
            </div>
          </td>
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
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
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
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
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Pamilerin} alt="" />
              <div>
                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                  Pamilerin Adegoke
                </h2>
                <p className="text-[12px] font-normal text-co ">
                  pamilerin@email.com
                </p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
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
                  info@jumia.com
                </p>
              </div>
            </div>
          </td>
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Pamilerin} alt="" />
              <div>
                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                  Pamilerin Adegoke
                </h2>
                <p className="text-[12px] font-normal text-co ">
                  pamilerin@email.com
                </p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
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
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Pamilerin} alt="" />
              <div>
                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                  Pamilerin Adegoke
                </h2>
                <p className="text-[12px] font-normal text-co ">
                  pamilerin@email.com
                </p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
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
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Kemi} alt="" />
              <div>
                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                  Kemi Adeneye
                </h2>
                <p className="text-[12px] font-normal text-co ">
                  kemi@email.com
                </p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="font-medium text-[14px]  text-bbb pl-4 ">
            View details
          </td>
          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
            {" "}
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
          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
            243 Herbert Macaulay,Yaba,Lagos
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <img src={Kemi} alt="" />
              <div>
                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                  Kemi Ogunyemi
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
    </div>
  )
}

export default Clist
