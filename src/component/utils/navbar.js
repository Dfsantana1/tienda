import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/navbar.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo de la Tienda</Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === '/products' ? 'active' : ''}>
          <Link to="/products">Productos</Link>
        </li>
        <li className={location.pathname === '/cart' ? 'active' : ''}>
          <Link to="/cart">carrito</Link>
        </li>
        <li className={location.pathname === '/login' ? 'active' : ''}>
          <Link to="/loginForm">LoginForm</Link>
        </li>
        <li className={location.pathname === '/registro' ? 'active' : ''}>
          <Link to="/Registro ">registro</Link>
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
