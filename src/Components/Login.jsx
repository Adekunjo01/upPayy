import React, { useState } from "react";
import Logo from "../Assets/Content.svg";


export default function Login() {
        const[email,setEmail]=useState("");
        const[password,setPassword]=useState("");
        

        async function logs(e) {
          e.preventDefault();  
          let result = await fetch("https://backkkkkkendd-1.onrender.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({email,password}),
          });
          if (result.ok) {
            result = await result.json();
            localStorage.setItem("user-info", JSON.stringify(result));
            window.location.assign('/dashboard');  
          } else {
           alert("Invalid Credentials")
          }
        }
      
  return (

    <div className="flex justify-center items-center mt-14">
      <div className=" w-[587px] h-[590px] rounded-lg bg-white px-6 py-8 shadow-xl ring-2 ring-slate-900/5 ">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="" className="w-[56px] h-[56px]   " />
          <p className="font-sans text-[12px] text-ashhh font-semibold ">
            Pay By Transfer
          </p>
          <h2 className="font-semibold  text-[30px] text-ashhhh font-sans ">
            Log in to your account
          </h2>
          <p className="text-[16px] text-ashh font-normal font-sans mt-1 ">
            Welcome back! Please enter your details
          </p>
        </div>
        <form onSubmit={logs} >
          <label htmlFor="email" className="font-medium text-[14px] text-frm">
            Email
          </label>{" "}
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            id="email"
            placeholder="Enter your email"
            className="border-2 outline-none border-brd w-full mt-2 text-[16px] p-2 font-sans mb-3 font-normal rounded-lg"
          />{" "}
          <br />
          <label htmlFor="password" className="font-medium text-[14px] text-frm">
            Password
          </label>{" "}
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="*******"
            className="border-2 border-brd outline-none w-full p-2 text-[16px] font-sans font-normal mt-1 rounded-lg"
          />
          <br />
          <div className="mt-4 flex items-center space-x-2 ">
            <input type="checkbox" className="w-[16px] h-[16px]" />
            <label htmlFor="vehicle1" className="text-[14px] font-sans font-normal">
              {" "}
              Remember for 30 days
            </label>
            <br />
          </div>
           
            
          <button type="submit" className="rounded-lg bg-black text-white w-full p-2 mt-5">
            Sign in
          </button>
        </form>

        <div>
           
        </div>
      </div>
    </div>
  );
}
