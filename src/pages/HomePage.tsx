import { Outlet }from "react-router-dom";
import Footer from "../components/FooterPage";
import Layout from "../components/Layout";


const HomePage = () => {
  return (
    <>
      <h1>Vite Boleto</h1>
      <Layout />
     
      <Outlet />

      <Footer />
     
    </>
  );
};

export default HomePage;
