import React from "react";
import Home from "../Assets/Home.svg";
import RightArrow from "../Assets/chevron-right.svg";
import Bell from "../Assets/Search hover.svg";
import Avatar from "../Assets/Avatars.svg";
import ArrowDown from "../Assets/downn.svg";
import { NavLink } from "react-router-dom";
export default function Dashboard({ text, text2, text3, secondNav }) {
  function logout() {
    localStorage.removeItem("user-info");
    window.location.href = '/'; // Redirect to the login page
  }
  return (
    <>
      <div className="w-full flex flex-col ">
        <div>
          <header className="flex  justify-between items-center">
            <div className="flex ml-10  items-center space-x-2 ">
              <NavLink to="/">
                <img src={Home} alt="" />
              </NavLink>
              <img src={RightArrow} alt="" />
              <h2 className="text-[14px] text-dash font-medium ">{text}</h2>
              {secondNav && (
                <>
                  <img src={RightArrow} alt="" />
                  <h2 className="text-dash text-[14px] font-normal font-sans">
                    {text2}
                  </h2>
                  <img src={RightArrow} alt="" />
                  <h1 className="font-medium text-[14px] text-num ">{text3}</h1>
                </>
              )}
            </div>
            <div className="flex items-center mr-4  space-x-6 ">
              <NavLink to="/bell">
                <img src={Bell} alt=""/>
              </NavLink>
              <div className="flex  items-center space-x-2">
                <img src={Avatar} alt="" />
                
                  <img  onClick={logout} src={ArrowDown} alt="" />
                 
                              </div>
            </div>
          </header>
          <hr className="border-t-1 border-line w-full ml-3 mr-3  " />
          <div className="flex items-center  justify-between mt-6 ml-10 "></div>
        </div>
      </div>
    </>
  );
}
