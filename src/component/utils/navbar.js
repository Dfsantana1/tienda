import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/navbar.css';

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo de la Tienda</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === '/products' ? 'active' : ''}>
          <Link to="/products">Productos</Link>
        </li>
        <li className={location.pathname === '/cart' ? 'active' : ''}>
          <Link to="/cart">Carrito</Link>
        </li>
        <li className={location.pathname === '/login' ? 'active' : ''}>
          <Link to="/loginForm">LoginForm</Link>
        </li>
        <li className={location.pathname === '/registro' ? 'active' : ''}>
          <Link to="/registro">Registro</Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/carrito">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
