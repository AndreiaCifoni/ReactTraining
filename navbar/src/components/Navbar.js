import React from "react";
import "./navbar.css";
import MenuItems from "./MenuItem";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1 className="nav-title">React</h1>
      <div className="nav-icon"></div>
      <ul>
        {MenuItems.map((item) => {
          return (
            <li>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <button>Sign up</button>
    </nav>
  );
};

export default Navbar;
