import React from 'react';
import './NavBar.css'; // Create a separate CSS file for the CenterCard component if needed

const NavBar = () => {
    return  (
        <>
          <div className="logo"><a href='.' className="top-bar-link title"> Hamidreza Kamkari </a></div>
              <nav className="nav-links">
                  <a href="./blog/index.html" className="top-bar-link">Blog</a>
                  <a href="#about" className="top-bar-link">Publications</a>
                  <a href="./CV.pdf" className="top-bar-link">CV</a>
              </nav>
        </>
    );
}

export default NavBar;

