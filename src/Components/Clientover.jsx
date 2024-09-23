import React from 'react'
import { NavLink } from 'react-router-dom'
import ApexChart from "../Components/Graph";
import Bank from "../Assets/home-4.svg";
function Clientover() {
  return (
    <div>
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
    <div>
      <h2 className="font-medium  text-[18px] font-sans  mt-10 mb-5 ">
        Statistics
      </h2>
      <div className="flex justify-between space-x-8 ">
        <div className="w-full h-[92px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 ">
          <div className="flex justify-between">
            <div>
              <h2 className="font-medium text-[14px] font-sans text-co">
                Total Transaction Count{" "}
              </h2>
              <p className="font-semibold text-[22px] text-argu ">
                530,291
              </p>
            </div>
            <img src={Bank} alt="" />
          </div>
        </div>
        <div className="w-full h-[92px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 ">
          <div className="flex justify-between">
            <div>
              <h2 className="font-medium text-[14px] font-sans text-co">
                Total Revenue{" "}
              </h2>
              <p className="font-semibold text-[22px] text-argu ">
                {" "}
                ₦5,280,283.90
              </p>
            </div>
            <img src={Bank} alt="" />
          </div>
        </div>
        <div className="w-full h-[92px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 ">
          <div className="flex justify-between">
            <div>
              <h2 className="font-medium text-[14px] font-sans text-co">
                Merchants{" "}
              </h2>
              <p className="font-semibold text-[22px] text-argu ">50</p>
            </div>
            <img src={Bank} alt="" />
          </div>
        </div>
        <div className="w-full h-[92px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 ">
          <div className="flex justify-between">
            <div>
              <h2 className="font-medium text-[14px] font-sans text-co">
                Account No Generated{" "}
              </h2>
              <p className="font-semibold text-[22px] text-argu ">
                24,439
              </p>
            </div>
            <img src={Bank} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <ApexChart />
    </div>
    </div>
  )
}

export default Clientover
