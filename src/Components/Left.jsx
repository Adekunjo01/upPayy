import React, { useState } from "react";
import Leggo from "../Assets/image 499.svg";
import Dash from "../Assets/elements.svg";
import Client from "../Assets/ElementsCl.svg";
import Merchants from "../Assets/Elementsmerch.svg";
import Institution from "../Assets/Institution.svg";
import Transaction from "../Assets/Transaction.svg";
import Stacking from "../Assets/neww.svg";
import Settings from "../Assets/Settings.svg";
import Avi from "../Assets/User.svg";
// import Logout from "../Assets/sign-out.svg";
import { NavLink } from "react-router-dom";

export default function Left() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="flex flex-col" style={{ width: "200px" }}>
        <div className="flex justify-center  ">
          <img src={Leggo} alt="" />
        </div>
        <div className="px-3">
          <hr className="border-t-1 border-line w-full   " />
          <p className="text-[8px] font-medium font-sans  text-mm  pt-7">
            MAIN MENU
          </p>
          <div>
            {/* <NavLink to="/dashboard" className="ta">
            <p style={{backgroundColor:window.location.pathname === "/dashboard" ? "white":"", color:window.location.pathname === "/dashboard" ? "rgba(97, 208, 255, 1)":""}}>
            <CiHome size={20}/>
              Dashboard
            </p>
          </NavLink> */}

            <NavLink to="/dashboard" className="ta">
              <div
                className="flex space-x-4 items-center p-3 mt-3 "
                style={{
                  backgroundColor:
                    window.location.pathname === "/dashboard" ? "#E6E6E6" : "",
                  color:
                    window.location.pathname === "/dashboard" ? "#33b4A" : "",
                }}
              >
                <img src={Dash} alt="" />
                <p className="text-[12px] font-medium ">Dashboard</p>
              </div>
            </NavLink>
            <NavLink to="/client">
              <div
                className="flex space-x-4 mt-3  items-center p-3"
                style={{
                  backgroundColor:
                    window.location.pathname === "/client" ? "#E6E6E6" : "",
                  color:
                    window.location.pathname === "/client" ? "#333b4A" : "",
                }}
              >
                <img src={Client} alt="" />
                <p className="text-[12px] font-medium ">Clients</p>
              </div>
            </NavLink>
            <NavLink to="">
              <div
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
                className="flex space-x-4 mt-3  items-center p-3"
              >
                <img src={Merchants} alt="" />

                <p className="text-[12px] font-medium ">Merchant</p>
              </div>
              {showMenu ? (
                <div className="flex flex-col pl-10  gap-4">
                  <NavLink
                    className="p-2"
                    to="/merchant"
                    style={{
                      backgroundColor:
                        window.location.pathname === "/merchant"
                          ? "#E6E6E6"
                          : "",
                      color:
                        window.location.pathname === "/merchant"
                          ? "#333b4A"
                          : "",
                    }}
                  >
                    <span className="font-sans font-medium  text-[12px] text-co ">
                      Pos Merchant
                    </span>
                  </NavLink>
                  <NavLink
                    className="p-2"
                    to="/webmerchant"
                    style={{
                      backgroundColor:
                        window.location.pathname === "/webmerchant"
                          ? "#E6E6E6"
                          : "",
                      color:
                        window.location.pathname === "/merchant"
                          ? "#333b4A"
                          : "",
                    }}
                  >
                    <span className="font-sans font-medium  text-[12px] text-co ">
                      Web Merchant
                    </span>
                  </NavLink>
                </div>
              ) : (
                ""
              )}
            </NavLink>
            <NavLink to="/institution">
              <div
                className="flex space-x-4 mt-3  items-center p-3"
                style={{
                  backgroundColor:
                    window.location.pathname === "/institution"
                      ? "#E6E6E6"
                      : "",
                  color:
                    window.location.pathname === "/client" ? "#333b4A" : "",
                }}
              >
                <img src={Institution} alt="" />
                <p className="text-[12px] font-medium ">Institution</p>
              </div>
            </NavLink>
            <NavLink to="/transaction">
              <div
                className="flex space-x-4 mt-3  items-center p-3"
                style={{
                  backgroundColor:
                    window.location.pathname === "/transaction"
                      ? "#E6E6E6"
                      : "",
                  color:
                    window.location.pathname === "/transaction"
                      ? "#333b4A"
                      : "",
                }}
              >
                <img src={Transaction} alt="" />
                <p className="text-[12px] font-medium ">Transactions</p>
              </div>
            </NavLink>
            <NavLink to="/settlement">
              <div
                className="flex space-x-4 mt-3  items-center p-3"
                style={{
                  backgroundColor:
                    window.location.pathname === "/settlement" ? "#E6E6E6" : "",
                  color:
                    window.location.pathname === "/settlement" ? "#333b4A" : "",
                }}
              >
                <img src={Stacking} alt="" />
                <p className="text-[12px] font-medium ">Settlement</p>
              </div>
            </NavLink>
            <NavLink to="/setting">
              <div
                className="flex space-x-4 mt-28  items-center p-3"
                style={{
                  backgroundColor:
                    window.location.pathname === "/setting" ? "#E6E6E6" : "",
                  color:
                    window.location.pathname === "/setting" ? "#333b4A" : "",
                }}
              >
                <img src={Settings} alt="" />
                <p className="text-[12px] font-medium ">Settings</p>
              </div>
            </NavLink>
            <hr className="border-t-1 border-line w-full  mt-5  " />
            {/*  */}

            <div className="flex space-x-4 mt-2  items-center p-3">
              <img src={Avi} alt="" />
              <div>
                <h2 className="text-[14px] font-medium ">Funke Oba</h2>
                <p className="text-[12px] font-sans ">funke@tm30.net</p>
              </div>
              <NavLink to="/sign-out"></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
