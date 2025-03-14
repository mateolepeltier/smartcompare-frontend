import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          end
        >
          Accueil (Liste des Smartphones)
        </NavLink>
        <NavLink 
          to="/dashboard2" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Trouver mon Modèle
        </NavLink>
        <NavLink 
          to="/dashboard3" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Comparer
        </NavLink>
        <NavLink 
          to="/dashboard4" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Acheter
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
