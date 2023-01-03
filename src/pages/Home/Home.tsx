import { Outlet }from "react-router-dom";
import Footer from "../../components/Footer/FooterPage";
import Menu from "../../components/Menu/Menu";

import "./Home.css"


const Home = () => {
  return (
    <>
      <h1>Vite Boleto</h1>
      <Menu />
      <div className="home">     
      <Outlet />
      </div>
     
      <Footer />
    </>
  );
};

export default Home;
