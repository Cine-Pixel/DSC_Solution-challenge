import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  return (
    <nav>
      <ul>
        <li className="active-link">
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </a>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-info-circle"></i> About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fas fa-globe"></i> Contact
          </Link>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-cog"></i> Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
