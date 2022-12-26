import { BrowserRouter, Route, Routes } from "react-router-dom";

//styles
import "../styles/App.css";

//pages
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import Cadastro from "../pages/Cadastro";
import PrintPage from "../pages/PrintPage";
import NoPage from "../pages/NoPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/print" element={<PrintPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
