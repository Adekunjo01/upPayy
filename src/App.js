import "./App.css";
import React from "react";
 import Login from "./Components/Login";
 import Dashboard from "./Components/Dashboard";
 import Transaction from "./Components/Transaction";
 import Clients from "./Components/Clients";
 import Merchant from "./Components/Merchant";
 import Settlement from "./Components/Settlement";
 import Settings from "./Components/Settings";
 import Institution from "./Components/Institution";
 import WebMerchant from "./Components/WebMerchant";
 import ChowdeckOverview from "./Components/ChowdeckOverview";
 import ClientOverview from "./Components/ClientOverview";
import Register from "./Components/Register";

 import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/client" element={<Clients />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/settlement" element={<Settlement />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/webmerchant" element={<WebMerchant />} />
          <Route path="/chowdeck" element={<ChowdeckOverview />} />
          <Route path="/clientoverview" element={<ClientOverview />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
