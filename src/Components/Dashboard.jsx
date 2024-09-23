import React from "react";
import Home from "../Assets/Home.svg";
import RightArrow from "../Assets/chevron-right.svg";
import Bell from "../Assets/Search hover.svg";
import Avatar from "../Assets/Avatars.svg";
import ArrowDown from "../Assets/downn.svg";
import Bank from "../Assets/home-4.svg";
import ArrowLeft from "../Assets/Arrow - Left.svg";
import Google from "../Assets/google.svg";
import UpArrow from "../Assets/UpArrow.svg";
import DownArrown from "../Assets/DownArrow.svg";
import Pamilerin from "../Assets/Pam.svg";
import Netflix from "../Assets/image 107.svg";
import Amazon from "../Assets/image 109.svg";
import Prime from "../Assets/image 108.svg";
import Kuda from "../Assets/image 111.svg";
import Multichoice from "../Assets/image 110.svg";
import Niyi from "../Assets/Niyi.svg";
import Eleven from "../Assets/11.svg";
import Kemi from "../Assets/Kemi.svg";
import Seyi from "../Assets/Seyii.svg";
import EntryF from "../Assets/Show 5.svg";
import ButtonL from "../Assets/ButtonLeft.svg";
import ButtonR from "../Assets/ButtonR.svg";
import { NavLink } from "react-router-dom";
import Left from "./Left.jsx";

export default function Dashboard() {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const token = userInfo?.token;

  const table1 = [
    {
      clientID: "UP09230396",
      clientName: {
        name: "Pamilerin Adegoke",
        email: "a.pamilerin@gmail.com",
        img: Pamilerin,
      },
      totalRevenue: "903,000",
      merchant: {
        img1: Netflix,
        img2: Amazon,
        img3: Prime,
        img4: Kuda,
        img5: Multichoice,
        num: Eleven,
      },
      dateAdded: "23/09/23, 09:11:04",
      status: "Inactive",
    },
    {
      clientID: "UP09230396",
      clientName: {
        name: "Niyi Afolabi",
        email: "niyi@email.com",
        img: Niyi,
      },
      totalRevenue: "903,000",
      merchant: {
        img1: Netflix,
        img2: Prime,
        img3: Kuda,
        img4: Multichoice,
        img5: Amazon,
        num: Eleven,
      },
      dateAdded: "23/09/23, 09:11:04",
      status: "Active",
    },
    {
      clientID: "UP09230396",
      clientName: {
        name: "Kemisola Ogunyemi",
        email: "kemi@email.com",
        img: Kemi,
      },
      totalRevenue: "903,000",
      merchant: {
        img1: Netflix,
        img2: Prime,
        img3: Multichoice,
        img4: Amazon,
        img5: Kuda,
        num: Eleven,
      },
      dateAdded: "23/09/23, 09:11:04",
      status: "Inactive",
    },
    {
      clientID: "UP09230396",
      clientName: {
        name: "Seyi Tinubu",
        email: "seyi@lagos.org",
        img: Seyi,
      },
      totalRevenue: "903,000",
      merchant: {
        img1: Prime,
        img2: Multichoice,
        img3: Amazon,
        img4: Netflix,
        img5: Kuda,
        num: Eleven,
      },
      dateAdded: "23/09/23, 09:11:04",
      status: "Active",
    },
    {
      clientID: "UP09230396",
      clientName: {
        name: "Demilade Faneye",
        email: "demi@email.com",
        img: Niyi,
      },
      totalRevenue: "903,000",
      merchant: {
        img1: Kuda,
        img2: Amazon,
        img3: Prime,
        img4: Netflix,
        img5: Multichoice,
        num: Eleven,
      },
      dateAdded: "23/09/23, 09:11:04",
      status: "Active",
    },
  ];

      const table2 = [
        {
          TransactionRef: "UP09230396",
          ClientID: "UP09230396",
          MerchantID: "UP09230396",
          Clname: "Anthony Chiazor",
          Ctype:"Web",
          Amount: "₦36150.00",
          Bank: "Access Bank"
        },
        {
          TransactionRef: "UP09230396",
          ClientID: "UP09230396",
          MerchantID: "UP09230396",
          Clname: "Korede Suliamon",
          Ctype:"POS",
          Amount: "₦903750.00",
          Bank: "HopePS Bank"
        },
        {
          TransactionRef: "UP09230396",
          ClientID: "UP09230396",
          MerchantID: "UP09230396",
          Clname: "Saheed Abiodun",
          Ctype:"POS",
          Amount: "₦210875.00",
          Bank: "GT Bank"
        },
        {
          TransactionRef: "UP09230396",
          ClientID: "UP09230396",
          MerchantID: "UP09230396",
          Clname: "Segun Peters",
          Ctype:"Web",
          Amount: "₦120500.00",
          Bank: "Sterling Bank"
        },
        {
          TransactionRef: "UP09230396",
          ClientID: "UP09230396",
          MerchantID: "UP09230396",
          Clname: "Segun Johnson",
          Ctype:"Web",
          Amount: "₦36150.00",
          Bank: "Zenith Bank"
        },
      ]


  if (token) {
    fetch("http://tm30usermanagement.tm30.net/user/agentmanagers/?page=1", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  } else {
    console.error("No token found");
  }

  //   const isAuthenticated = localStorage.getItem("user-info");

  //   if (!isAuthenticated) {
  //     return <Navigate to="/" />;

  //   }
  // function logout() {
  //   localStorage.removeItem("user-info");
  //   window.location.href = '/'; // Redirect to the login page
  // }
  return (
    <>
      <div className="flex">
        <div className="hidden md:block">
          <Left />
        </div>
        <div className="w-full h-full   flex flex-col ">
          <div>
            <header className="flex  justify-between items-center">
              <div className="flex ml-10  items-center space-x-2 ">
                <NavLink to="/">
                  <img src={Home} alt="" />
                </NavLink>
                <img src={RightArrow} alt="" />
                <h2 className="text-[14px] text-dash font-medium ">
                  Dashboard
                </h2>
              </div>
              <div className="flex items-center mr-4  space-x-6 ">
                <NavLink to="/bell">
                  <img src={Bell} alt="" />
                </NavLink>
                <div className="flex  items-center space-x-2">
                  <img src={Avatar} alt="" />
                  <img src={ArrowDown} alt="" />
                </div>
              </div>
            </header>
            <hr className="border-t-1 border-line w-full ml-3 mr-3  " />
            <div className="lg:flex items-center  justify-between mt-6 ml-10 ">
              <div className="flex flex-col">
                <h2 className="text-[24px] text-ovv font-medium ">Overview</h2>
                <p className="text-[14px] text-mm  font-normal">
                  All general informations appear in this field
                </p>
              </div>
              <div className="flex space-x-2  mr-4">
                <ul className="flex list-none">
                  <li className="page-item">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300  font-medium  rounded-l text-[14px]  hover:bg-ovv hover:text-white  text-frm "
                      to="/"
                    >
                      All Time
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300 font-medium text-[14px]  text-frm hover:bg-ovv  hover:text-white "
                      to="/"
                    >
                      This month
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300  font-medium  text-[14px]  text-frm hover:bg-ovv   hover:text-white "
                      to="/"
                    >
                      This week
                    </NavLink>
                  </li>
                  <li className="page-item active">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300  font-medium  text-[14px]  text-frm hover:bg-ovv   hover:text-white "
                      to="/"
                    >
                      Yesterday
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300  rounded-r  font-medium text-[14px]  text-frm hover:bg-ovv   hover:text-white "
                      to="/"
                    >
                      Today
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li className="page-item   ">
                    <NavLink
                      className="page-link px-3 py-2 border border-gray-300    font-medium text-[14px]  text-frm rounded-full "
                      to="/"
                    >
                      Custom
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ml-10 mt-5 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[1rem]  ">
              <div className="w-[100%] h-[148px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5    ">
                <img src={Bank} alt="" />
                <h2 className="text-[14px] font-sans  font-medium text-co">
                  Total Transaction Count
                </h2>
                <h1 className="text-[24px]  font-semibold text-num font-sans">
                  530,291
                </h1>
              </div>
              <div className="w-[100%] h-[148px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5   ">
                <img src={Bank} alt="" />
                <h2 className="text-[14px] font-sans  font-medium text-co">
                  Total Revenue
                </h2>
                <h1 className="text-[24px]  font-semibold text-num font-sans">
                  ₦5,280,283.90
                </h1>
              </div>
              <div className="w-[100%] h-[148px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5  ">
                <img src={Bank} alt="" />
                <h2 className="text-[14px] font-sans  font-medium text-co">
                  Total Clients
                </h2>
                <h1 className="text-[24px]  font-semibold text-num font-sans">
                  5,203
                </h1>
              </div>
              <div className="w-[100%] h-[148px] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5  ml-[-7px]">
                <img src={Bank} alt="" />
                <h2 className="text-[14px] font-sans  font-medium text-co">
                  Total Merchants
                </h2>
                <h1 className="text-[24px]  font-semibold text-num font-sans">
                  14,230
                </h1>
              </div>
            </div>
            <div className="ml-10 mt-5 mr-4  ">
              <div className="w-full h-[full] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 mr-14">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium text-[20px] text-tch font-sans ">
                    New Client List
                  </h2>
                  <div className="">
                    <NavLink
                      href="/"
                      className="flex border border-lft p-2 space-x-3  rounded-lg "
                    >
                      <button className="font-medium text-[14px]">
                        See All
                      </button>
                      <img src={ArrowLeft} alt="" />
                    </NavLink>
                  </div>
                </div>
                <form action="" className="">
                  <div className="flex relative items-center  ">
                    <img src={Google} alt="" className="absolute left-[10px]" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="border border-lft rounded-lg pl-[40px]  font-normal text-[16px] w-[412px] h-[44px] shadow-white  outline-none "
                    />
                  </div>
                </form>
                <div className="w-[100%] overflow-x-auto">
                  <table className="xl:w-[100%] lg:w-[120%] w-[140%] divide-y divide-gray-200  mt-4 ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center space-x-1">
                            <span>CLIENT ID</span>
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
                            <span>CLIENT NAME</span>
                            <div className="space-y-20">
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
                            <span>TOTAL REVENUE</span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center space-x-1">
                            <span>MERCHANTS</span>
                            <div className="space-y-1">
                              <NavLink to="/">
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
                            <span>DATE ADDED</span>
                            <div className="space-y-1">
                              <NavLink to="/">
                                <img
                                  src={UpArrow}
                                  alt="Up Arrow"
                                  className="mb-1"
                                />
                              </NavLink>
                              <NavLink to="/">
                                {" "}
                                <img src={DownArrown} alt="Down Arrow" />
                              </NavLink>
                            </div>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center space-x-1">
                            <span>STATUS</span>
                            <div className="space-y-1">
                              <NavLink to="/">
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
                      </tr>
                    </thead>
                    <tbody>
                      {table1.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                            {item.clientID}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              <img src={item.clientName.img} alt="" />
                              <div>
                                <h2 className="text-[12px] text-ashhhh font-medium font-sans ">
                                  {item.clientName.name}
                                </h2>
                                <p className="text-[12px] font-normal text-co ">
                                  {item.clientName.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-[14px] flex justify-center flex-col text-up  mt-5 font-medium font-sans px-8 ">
                            {" "}
                            {item.totalRevenue}
                          </td>
                          <td>
                            <div className="flex  ">
                              <img src={item.merchant.img1} alt="" />
                              <img
                                src={item.merchant.img2}
                                alt=""
                                className="m-[-10px]"
                              />
                              <img src={item.merchant.img3} alt="" />
                              <img
                                src={item.merchant.img4}
                                alt=""
                                className="m-[-10px]"
                              />
                              <img src={item.merchant.img5} alt="" />
                              <img
                                src={item.merchant.num}
                                alt=""
                                className="m-[-10px]"
                              />
                            </div>
                          </td>
                          <td className="text-[12px]  pl-5 font-normal  font-sans  text-up">
                            {item.dateAdded}
                          </td>
                          <td>
                            <div
                              className={`rounded-full ${
                                item?.status === "Inactive"
                                  ? "bg-[#FEF3F2]"
                                  : "bg-[#ECFDF3]"
                              }  flex items-center w-[78px] h-[34px] space-x-2  ml-4  pl-2 `}
                            >
                              <div
                                class={`w-[8px] h-[8px] rounded-full ${
                                  item?.status === "Inactive"
                                    ? "bg-danger"
                                    : "bg-green-500"
                                } `}
                              ></div>
                              <h2
                                className={`${
                                  item?.status === "Inative"
                                    ? "text-[#B42318]"
                                    : "text-[#027A48]"
                                }  text-[12px] font-medium `}
                              >
                                {item.status}
                              </h2>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between mt-3 ">
                  <h2 className="text-[14px] font-medium font-sans text-tt ">
                    Showing 1-5 of 100 entries
                  </h2>
                  <div className="flex  mr-16 space-x-3 ">
                    <h1 className="text-[14px] font-medium font-sans text-tt ">
                      Show
                    </h1>
                    <img src={EntryF} alt="" />
                    <h2 className="text-[14px] font-medium font-sans text-tt ">
                      entries
                    </h2>
                    <div className="flex items-center space-x-2 ">
                      <button>
                        <img src={ButtonL} alt="" />
                      </button>
                      <h1 className="text-[14px] font-medium font-sans text-tt ">
                        1
                      </h1>
                      <button>
                        <img src={ButtonR} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-10 mt-5 mr-4  ">
              <div className="w-full h-[full] rounded-lg bg-white px-6 py-4 shadow-xl ring-2 ring-slate-900/5 mr-14">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium text-[20px] text-tch font-sans ">
                    Recent Transactions
                  </h2>
                  <div className="">
                    <NavLink
                      to="/"
                      className="flex border border-lft p-2 space-x-3 "
                    >
                      <button className="font-medium text-[14px]">
                        See All
                      </button>
                      <img src={ArrowLeft} alt="" />
                    </NavLink>
                  </div>
                </div>
                <form action="" className="">
                  <div className="flex relative items-center  ">
                    <img src={Google} alt="" className="absolute left-[10px]" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="border border-lft rounded-lg pl-[40px] outline-none  font-normal text-[16px] w-[412px] h-[44px] "
                    />
                  </div>
                </form>
                <div className="w-[100%] overflow-x-scroll">
                  <table className="xl:w-[100%] lg:w-[120%] w-[140%] divide-y divide-gray-200  mt-4 ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center space-x-1">
                            <span>TRANSACTION ID</span>
                            <div className="space-y-4 ">
                              <NavLink to="/">
                                {" "}
                                <img
                                  src={UpArrow}
                                  alt="Up Arrow"
                                  className="mb-1"
                                />
                              </NavLink>
                              <NavLink href="/">
                                <img src={DownArrown} alt="Down Arrow" />
                              </NavLink>
                            </div>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center space-x-1">
                            <span>CLIENT ID</span>
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
                            <span>MERCHANT ID</span>
                            <div className="space-y-20">
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
                            <span>CLIENT NAME</span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center space-x-1">
                            <span>CHANNEL TYPE</span>
                            <div className="space-y-1">
                              <NavLink to="/">
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
                            <span>AMOUNT</span>
                            <div className="space-y-1">
                              <NavLink to="/">
                                <img
                                  src={UpArrow}
                                  alt="Up Arrow"
                                  className="mb-1"
                                />
                              </NavLink>
                              <NavLink to="/">
                                {" "}
                                <img src={DownArrown} alt="Down Arrow" />
                              </NavLink>
                            </div>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center space-x-1">
                            <span>BANK NAME</span>
                            <div className="space-y-1">
                              <NavLink to="/">
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
                      </tr>
                    </thead>
                    <tbody>
                      {table2.map((itemm) => (

                        <tr  key={itemm.id}  >
                               <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                          {itemm.TransactionRef}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                          {itemm.ClientID}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-[12px] font-medium text-up ">
                          {itemm.MerchantID}
                        </td>
                        <td className="font-medium text-[14px]  text-bbb pl-4 ">
                          {itemm.Clname}
                        </td>
                        <td className="font-medium text-[14px]   pl-6  text-up ">
                          {itemm.Ctype}
                        </td>
                        <td className="text-[12px]  pl-5 font-medium  font-sans  text-up">
                          {itemm.Amount}
                        </td>
                        <td className="text-[12px] font-medium font-sans text-up pl-6 ">
                          {itemm.Bank}
                        </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between mt-3 ">
                  <h2 className="text-[14px] font-medium font-sans text-tt ">
                    Showing 1-5 of 100 entries
                  </h2>
                  <div className="flex  mr-16 space-x-3 ">
                    <h1 className="text-[14px] font-medium font-sans text-tt ">
                      Show
                    </h1>
                    <img src={EntryF} alt="" />
                    <h2 className="text-[14px] font-medium font-sans text-tt ">
                      entries
                    </h2>
                    <div className="flex items-center space-x-2 ">
                      <button>
                        <img src={ButtonL} alt="" />
                      </button>
                      <h1 className="text-[14px] font-medium font-sans text-tt ">
                        1
                      </h1>
                      <button>
                        <img src={ButtonR} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
