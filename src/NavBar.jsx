import React from 'react';
import './NavBar.css'; // Create a separate CSS file for the CenterCard component if needed

const NavBar = ({ onNavClick }) => {
    return  (
        <>
          <div className="logo"><a href='.' className="top-bar-link title"> Hamidreza Kamkari </a></div>
              <nav className="nav-links">
                    <button onClick={onNavClick} className="top-bar-link">Home</button>
                    <a href="./blog/index.html" className="top-bar-link">Blog</a>
                    <button onClick={onNavClick} className="top-bar-link">Publications</button>
                    <a href="./CV_long.pdf" className="top-bar-link">CV</a>
              </nav>
        </>
    );
}

export default NavBar;

