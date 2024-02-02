import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/instruction">Instruction</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
