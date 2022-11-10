import '../styles/Header.css'

const Header = () => {
    return (
        <header>
        <h3>inicio do header do app</h3>
        <nav className="nav-bar">
          <div className="menu">Menu</div>
          <ul>
            <li>lista</li>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
          </ul>
        </nav>
      </header>      
    )
}

export default Header;