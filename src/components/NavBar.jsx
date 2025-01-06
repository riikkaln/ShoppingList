import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Käytetään NavLinkia
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toiminto hampurilaisvalikon avaamiseksi ja sulkemiseksi
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
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)} // Suljetaan valikko, kun linkkiä klikataan
              className={({ isActive }) => (isActive ? 'active' : '')} // Käytetään isActive-propia
            >
              Etusivu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shopping-list"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Ostoslista
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Reseptit
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
