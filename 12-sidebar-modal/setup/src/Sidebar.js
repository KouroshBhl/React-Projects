import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { showMenu, setShowMenu } = useGlobalContext();
  return (
    //show-sidebar
    <aside className={`sidebar ${showMenu && "show-sidebar"} `}>
      <div className="sidebar-header">
        <img className="logo" alt="coding addict" src={logo} />
        <button className="close-btn" onClick={() => setShowMenu(false)}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((el) => (
          <li key={el.id}>
            <a href={el.url}>
              {el.icon}
              {el.text}
            </a>
          </li>
        ))}
      </ul>

      <ul className="social-icons">
        {social.map((el) => (
          <li key={el.id}>
            <a href={el.url}>{el.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
