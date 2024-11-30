import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Hampurilaisvalikko */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Otsikko, joka on keskitetty */}
        <h1 className="header-title">ShoppingList</h1>
      </div>

      {/* Navigaatio */}
      <nav>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Etusivu</Link></li>
          <li><Link to="/shopping-list" onClick={() => setIsOpen(false)}>Ostoslista</Link></li>
          <li><Link to="/recipes" onClick={() => setIsOpen(false)}>Reseptit</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;