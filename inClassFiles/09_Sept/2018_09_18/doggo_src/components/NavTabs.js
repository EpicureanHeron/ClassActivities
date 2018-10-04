import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/Discover"
        className={
          window.location.pathname === "/Discover" ? "nav-link active" : "nav-link"
        }
      >
        Discover
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/Search"
        className={
          window.location.pathname === "/Search" ? "nav-link active" : "nav-link"
        }
      >
        Search
      </Link>
    </li>
    
  </ul>
);

export default NavTabs;
