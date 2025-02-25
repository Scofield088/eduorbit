import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/edulogo1.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="EduOrbit" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Login</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/group-room">Group Rooms</Link></li>
          <li><Link to="/progress">Progress</Link></li>
          <li><Link to="/share">Share</Link></li>
          
          <li>
            <Link to="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
                className="profile-icon"
              >
                <path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-2.673 0-8 1.336-8 4v2h16v-2c0-2.664-5.327-4-8-4z" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
