import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-primary w-100 fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="/images/logo.png" alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Category</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Wallet</a>
              </li>
              <li className="nav-item">
                <FaSearch className="nav-icon search-icon ms-3" />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-light text-primary ms-2" href="#">Sign Up</a>
              </li>
              <li className="nav-item">
                <FaUserCircle className="nav-icon profile-icon ms-3" />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section  d-flex flex-column align-items-center justify-content-center text-center text-white ">
        <h1 className="display-4 fw-bold">PLAY WITH ATHLETE'S ACADEMY</h1>
        <p className="lead text-light px-3" style={{ maxWidth: '600px' }}>
          Welcome to Athlete's Academy, your gateway to sporting excellence! At Athlete’s Academy, we are dedicated to connecting aspiring athletes with experienced coaches and mentors through our cutting-edge chat platform. Whether you're passionate about football, tennis, cricket, athletics, yoga, or any other sport, we’ve got you covered!
        </p>
        <a href="#" className="btn btn-primary btn-lg mt-4">BE A PART OF OUR TEAM</a>
      </div>
    </div>
  );
};

export default HeroSection;

