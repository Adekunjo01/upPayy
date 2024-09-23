import React from 'react'
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import { NavLink } from 'react-router-dom';
import Pamilerin from "../Assets/Pam.svg";
import Niyi from "../Assets/Niyi.svg";
import Seyi from "../Assets/Seyii.svg";
import Hope from "../Assets/hope-bank-payment-service-logo.839b6438 1.svg";
function Comissioncl() {
  return (
    <div>
    <div className='flex' >
      <div className='mt-6 mr-4 ' >
          <h2 className='font-sans text-frm font-medium text-[14px]' >Set Commission</h2>
          <p className='font-sans font-normal text-[14px]  text-co' >Set a fixed amount or percentage of the transaction amount the system charges   </p>
      </div>
      <table className=" w-full h-fit divide-y divide-gray-200  mt-4 ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>CLIENT NAME</span>
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
                  <span>TYPE</span>
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>AMOUNT</span>
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
            <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <img src={Hope} alt="" />
                    <div>
                      <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                        HopePSBank
                      </h2>
                      <p className="text-[12px] font-normal text-co ">
                        customercare@hopepsbank.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
              Percentage
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                2
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update 
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Fixed
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                200,000
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Percentage
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                10
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update 
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Fixed
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                10
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Fixed
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                3
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update 
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Percentage
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                1
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Fixed
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                20,000
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Percentage
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                2.5
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Percentage
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                1.7
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update 
              </td>
            </tr>
            <tr>
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
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                Percentage
              </td>
                <td className="px-6 py-4 whitespace-nowrap  text-[14px] font-medium text-up ">
                2.5
              </td>
              <td className="font-medium text-[14px]  text-bbb pl-6 ">
                Update time
              </td>
            </tr>
          </tbody>
        </table>     
      </div>
      <hr className="border-t-1 border-line w-full  mr-3 mt-5  " />
      <div className='flex justify-end space-x-2 mt-5' >
<div className="border border-brd flex items-center    w-[79px] h-[40px] rounded-lg   p-1      ">
  <button className="flex px-3  items-center    ">
    <h2 className="font-medium text-[16px] text-frm font-sans ">
      Cancel
    </h2>
  </button>
</div>
<div className="border border-ashhh flex items-center    w-fit h-[40px] rounded-lg   p-2   bg-black   ">
  <button className="flex px-3  items-center    ">
    <h2 className="font-medium text-[16px] text-white font-sans ">
      Update 
    </h2>
  </button>
</div>
</div>
</div>
  )
}

export default Comissioncl
