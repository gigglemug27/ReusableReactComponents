// Navbar.js
import React from 'react';
import './NavbarStyle.css';
import { NavTabs } from './NavTabs';


const Navbar = ({ tabs }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {NavTabs.tabs.map((tab, index) => (
          <li key={index} className="nav-item">
            <a href={tab.link}>{tab.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
  
 