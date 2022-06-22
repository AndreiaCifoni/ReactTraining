import React, { useState } from "react";
import "./navbar.css";
import MenuItems from "./MenuItem";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [clicked, setClicked] = useState("false");

  const onClickIcon = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav-container">
      <h1 className="nav-title">Navbar</h1>
      <div className="nav-icon">
        <i onClick={onClickIcon}>
          {clicked ? (
            <HiMenu className="icon" />
          ) : (
            <HiOutlineX className="icon" />
          )}
        </i>
      </div>
      <ul className={clicked ? "nav-items" : "nav-items active"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <button className="nav-btn">Sign up</button>
    </nav>
  );
};

export default Navbar;
