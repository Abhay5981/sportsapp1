import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"

const Header = () => {
  return (
    <header className="container py-3 fixed-top ">
      <div className="d-flex justify-content-between align-items-center">
        
        {/* Logo Section */}
        <div className="logo">
          <img src="images/logo.png" alt="Logo"/>
        </div>
        
        {/* Navigation Section */}
        <nav className="nav ">
          <ul className="nav list-unstyled d-flex gap-3 m-0 text- font-bold">
            <li className="nav-item">
              <a href="#" className="nav-link ">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ">Contact</a>
            </li>
          </ul>
        </nav>
        
        {/* Buttons Section */}
        <div className="login d-flex gap-2">
          <button className="btn btn-outline-primary">Cart</button>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

