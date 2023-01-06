import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/Global.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Cadastro from "./pages/Cadastro";
import About from "./pages/About";
import Print from "./pages/Print";
import Calculate from "./pages/Calculate"; 
import NotFound from "./pages/NotFound";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="calculate" element={<Calculate />} />
        </Route>
        <Route path="/print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
