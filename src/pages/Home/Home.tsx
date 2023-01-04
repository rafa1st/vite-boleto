import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/FooterPage";

import Menu from "../../components/Menu/Menu";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Vite Boleto</h1>
      <Menu />      
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
