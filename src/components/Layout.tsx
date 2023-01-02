import { Link } from "react-router-dom";



const Layout = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        
      </ul>
    </nav>    
    </>
  );
};

export default Layout;
