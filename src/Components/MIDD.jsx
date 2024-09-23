import React from "react";
import CHOWWW from "../Assets/BigCHOW.svg";
import Copyy from "../Assets/copy.svg";
export default function MIDD() {
  return (
    <div>
      <div>
        <div className="flex justify-between ">
          <div className="flex space-x-5   ">
            <img src={CHOWWW} className="mb-36" alt="" />
            <div>
              <div className="flex space-x-4 items-center ">
                <h2 className="font-medium text-[24px] text-num ">Chowdeck</h2>
                <p className="font-sans text-[16px] font-medium   ">
                  TR0983748573
                </p>
                <div className="pl-32">
                  <div className="rounded-full bg-ggg flex items-center w-[78px] h-[34px] space-x-2    pl-2  ">
                    <div class="w-[8px] h-[8px] rounded-full bg-peace "></div>
                    <h2 className="text-peace  text-[12px] font-medium ">
                      Active
                    </h2>
                  </div>
                </div>
              </div>
              <p className="font-normal text-[12px] font-sans text-tg ">
                Logistics,Delivery
              </p>
              <div className="mt-2">
                <h2 className="font-medium text-[14px] text-tggg ">
                  Business Number
                </h2>
                <p className="text-[16px] font-medium text-num font-sans">
                  1204590
                </p>
              </div>
              <div className="mt-2">
                <h2 className="font-medium text-[14px] text-tggg ">
                  Registration Date
                </h2>
                <p className="text-[16px] font-medium text-num font-sans">
                  1204590
                </p>
              </div>
              <div className="mt-2">
                <h2 className="font-medium text-[14px] text-tggg ">
                  Channel Type
                </h2>
                <p className="text-[16px] font-medium text-num font-sans">
                  POS
                </p>
              </div>
              <div className="mt-2">
                <h2 className="font-medium text-[14px] text-tggg ">
                  No of Terminal
                </h2>
                <p className="text-[16px] font-medium text-num font-sans">4</p>
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
                  +234 (0) 709 039 2819
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
                  info@chowdeck.com
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
                <h2 className="font-medium text-[14px] text-tggg">Address</h2>
                <p className="font-medium text-[16px] text-argu">
                  243 Herbert Macaulay, Yaba,Lagos
                </p>
              </div>
              <div className="mt-3 ml-40">
                <button>
                  <img src={Copyy} alt="Copy icon" />
                </button>
              </div>
            </div>
            <div className="flex mt-4  justify-between ">
              <div>
                <h2 className="font-medium text-[14px] text-tggg">
                  Deposit Bank
                </h2>
                <p className="font-medium text-[16px] text-argu">
                  Hope PS Bank
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
                  Bank Account Number
                </h2>
                <p className="font-medium text-[16px] text-argu">0123456789</p>
              </div>
              <div className="mt-3 ml-40">
                <button>
                  <img src={Copyy} alt="Copy icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
