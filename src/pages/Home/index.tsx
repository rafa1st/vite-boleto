import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

import Menu from "../../components/Menu";

import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Vite Boleto</h1>
      <Menu />
      <div className="display" >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
