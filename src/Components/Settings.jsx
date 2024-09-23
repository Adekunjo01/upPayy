import React, { useState } from "react";
import Left from "./Left";
import Nav from "./Nav";
import SettingPassword from "./SettingPassword";
import Webconfig from "./Webconfig";
import CComission from "./CComission";

export default function Settings() {
  const [password, setPassword] = useState(true);
  const [web, setWeb] = useState(false);
  const [commission, setCommission] = useState(false);

  return (
    <>
      <div className="flex">
        <Left />
        <div className=" w-full">
          <Nav text={"Setting"} />
          <div className="flex justify-between items-center ">
            <div className="ml-10">
              <h2 className="font-medium font-sans text-[24px] text-tran ">
                Settings
              </h2>
              <p className="font-normal text-[15px]  text-mm ">
                Edit,manage and set configurations
              </p>
            </div>
          </div>
          <div className="ml-10 mt-5 mr-4">
            <div className="w-full h-fit rounded-lg bg-white px-6 py-4 shadow-sm ring-1 ring-slate-900/5 ">
              <div className="space-x-5">
                <button
                  onClick={() => {
                    setPassword(true);
                    setWeb(false);
                    setCommission(false);
                  }}
                  className="font-sans font-medium text-[16px] text-co"
                >
                  <h2
                    style={{ borderBottom: password ? "2px solid black" : "" }}
                  >
                    Password
                  </h2>
                </button>
                <button
                  onClick={() => {
                    setPassword(false);
                    setWeb(true);
                    setCommission(false);
                  }}
                  className="font-sans font-medium text-[16px] text-co"
                >
                  <h2 style={{ borderBottom: web ? "2px solid black" : "" }}>
                    {" "}
                    Web Terminal Configuration{" "}
                  </h2>
                </button>
                <button
                  onClick={() => {
                    setPassword(false);
                    setWeb(false);
                    setCommission(true);
                  }}
                >
                  <h2
                    style={{
                      borderBottom: commission ? "2px solid black" : "",
                    }}
                    className="font-sans font-medium text-[16px] text-co"
                  >
                    {" "}
                    Commissions{" "}
                  </h2>
                </button>
              </div>

              {password ? <SettingPassword /> : ""}
              {web ? <Webconfig /> : ""}
              {commission ? <CComission /> : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
