import "./header.css";
import React from "react";
import hamburger from "../Assets/Hamburger Menu.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__sales">
        🎉 To celebrate Spense's launch, we will be waiving all fees for the
        entire month of April. <br />
        <span>You will be receiving 100% of the earnings.</span> 🎉
      </div>
      <nav className="header__nav">
        <h3>spense.</h3>
        <img
          className="header__nav--mobile"
          src={hamburger}
          alt="hamburger menu"
        />
        <ul className="header__nav--no-mobile">
          <li>Business</li>
          <li>Pricing</li>
          <li>Features</li>
          <li>Login</li>
          <li id="nav--button">Get Started</li>
        </ul>
      </nav>
      <nav className="header__nav--desktop">
        <h3>spense.</h3>
        <ul>
          <li>Business</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
        <ul>
          <li>Login</li>
          <li id="nav--button">Get Started</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
