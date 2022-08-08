// import { useState } from "react";
import AvisoBoleto from "./AvisoBoleto";
import "../styles/App.css";
import Footer from "./FooterPage";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <Header />      
      <body>
        <h3>Inicio do body do APP</h3>
        <aside>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          quidem, repudiandae iste adipisci nemo incidunt magni perferendis ad
          facere veniam laboriosam error eos nulla inventore nisi fugit
          voluptatibus voluptas ex!
        </aside>
        <AvisoBoleto />
      </body>
      <Footer />
     
    </div>
  );
}
