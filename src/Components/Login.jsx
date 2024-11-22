import React, { useState } from "react";
import Logo from "../Assets/Content.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  async function logs(e) {
    e.preventDefault();
    setLoading(true); // Show loader
    try {
      let result = await fetch("https://backkkkkkendd-1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (result.ok) {
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        window.location.assign("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Hide loader
    }
  }

  return (
    <div className="relative flex justify-center items-center mt-14">
      {loading && (
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-10">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-white border-t-white"></div>
          <p className="text-white mt-2 text-lg">Signing in...</p>
        </div>
      )}
      <div className="w-[587px] h-[590px] rounded-lg bg-white px-6 py-8 shadow-xl ring-2 ring-slate-900/5">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="" className="w-[56px] h-[56px]" />
          <p className="font-sans text-[12px] text-ashhh font-semibold">Pay By Transfer</p>
          <h2 className="font-semibold text-[30px] text-ashhhh font-sans">Log in to your account</h2>
          <p className="text-[16px] text-ashh font-normal font-sans mt-1">
            Welcome back! Please enter your details
          </p>
        </div>
        <form onSubmit={logs}>
          <label htmlFor="email" className="font-medium text-[14px] text-frm">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your email"
            className="border-2 outline-none border-brd w-full mt-2 text-[16px] p-2 font-sans mb-3 font-normal rounded-lg"
          />
          <br />
          <label htmlFor="password" className="font-medium text-[14px] text-frm">Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="*******"
            className="border-2 border-brd outline-none w-full p-2 text-[16px] font-sans font-normal mt-1 rounded-lg"
          />
          <br />
          <div className="mt-4 flex items-center space-x-2">
            <input type="checkbox" className="w-[16px] h-[16px]" />
            <label htmlFor="remember" className="text-[14px] font-sans font-normal">
              Remember for 30 days
            </label>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-black text-white w-full p-2 mt-5"
            disabled={loading} // Disable button during loading
          >
            {loading ? "Signing in..." : "Sign in"} {/* Show loading text */}
          </button>
        </form>
      </div>
    </div>
  );
}
