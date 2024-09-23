import React from 'react'
import Bank from "../Assets/home-4.svg";
import Line from "../Assets/Lineee.svg";
import ApexChart from "../Components/Graph";
function ChowdeckOver() {
  return (
    <div className="mt-10  flex space-x-3 ">
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
            </div>
  )
}

export default ChowdeckOver
