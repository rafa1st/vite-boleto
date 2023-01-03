import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import PrintPage from "./pages/PrintPage";

import "./styles/Global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/print" element={<PrintPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
