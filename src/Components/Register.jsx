
import { useState } from "react";
import Logo from "../Assets/Content.svg";
import axios from 'axios'
import { NavLink } from "react-router-dom";


export default function Register() {
      const[name,setName]= useState('');
      const[email,setEmail]= useState('');
      const[number,setNumber]= useState('');
      const[password,setPassword]= useState('');      



       
        async function logs(e) {
          e.preventDefault();  
         axios.post('http://localhost:3001/register', {name,email,password,number})
         .then(result => console.log(result))
         .catch(err=> console.log(err))
         window.location.assign('/login'); 

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
            Create an Admin Account
          </h2>
        
        </div>
        <form  onSubmit={logs} >
        <label htmlFor="name" className="font-medium text-[14px] text-frm">
            Full Name
          </label>{" "}
          <br />
          <input
            type="text"
            required
            id=""
            placeholder="Enter your full name"
            className="border-2 outline-none border-brd w-full mt-2 text-[16px] p-2 font-sans mb-3 font-normal rounded-lg"
            onChange={(e)=> setName(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="email" className="font-medium text-[14px] text-frm">
            Email
          </label>{" "}
          <br />
          <input
            type="email"
            required
            id="email"
            placeholder="Enter your email"
            className="border-2 outline-none border-brd w-full mt-2 text-[16px] p-2 font-sans mb-3 font-normal rounded-lg"
            onChange={(e)=> setEmail(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="email" className="font-medium text-[14px] text-frm">
            Phone Number
          </label>{" "}
          <br />
          <input
            type="number"
            required
            id="email"
            placeholder="Enter your phone number"
            className="border-2 outline-none border-brd w-full mt-2 text-[16px] p-2 font-sans mb-3 font-normal rounded-lg"
            onChange={(e)=> setNumber(e.target.value) }
          />{" "}
          <br />
          <label htmlFor="password" className="font-medium text-[14px] text-frm">
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            required
            placeholder="*******"
            className="border-2 border-brd outline-none w-full p-2 text-[16px] font-sans font-normal mt-1 rounded-lg"
            onChange={(e)=> setPassword(e.target.value)}
          />
          <br />
         
           
            
          <button type="submit" className="rounded-lg bg-black text-white w-full p-2 mt-5">
            Create an Account
          </button>
        </form>

        <div className="flex space-x-3 mt-2" >
           <h2>Already have an Account?</h2>
           <NavLink to="/login" style={{ color: 'blue' }}>
  <p>Login</p>
</NavLink>
           
        </div>
      </div>
    </div>
  );
}
