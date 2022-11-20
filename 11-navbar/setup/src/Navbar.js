import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </button>
      </div>

      <div className={`links-container ${showMenu && "show-container"}`}>
        <ul className="links">
          {links.map((li) => (
            <li key={li.id}>
              <a href={li.url}>{li.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((el) => (
          <li key={el.id}>
            <a href={el.href}>{el.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
