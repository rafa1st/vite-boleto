import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <nav className="layout">
        <ul>
          <li>
            <Link
              to="/dashboard"
              state={"aqui vai carregar o estado vindo de outra página"}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
