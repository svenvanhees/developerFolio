import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Sven van Hees</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projecten</a>
          </li>
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          <li>
            <a href="#contact">Neem contact op</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
