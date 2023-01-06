import { NavLink } from "react-router-dom";
import "./styles.css";

const Menu = () => {
  return (
    <nav className="navBar">
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="/dashboard"
        state={"aqui vai carregar o estado vindo de outra página"}
      >
        Dashboard
      </NavLink>
      <NavLink to="/cadastro">Cadastro</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Menu;
