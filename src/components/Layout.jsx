import React, { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";
import "../styles/Layout.scss";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">
                <div className="homeButton">Mieto Programming</div>
              </Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/">Experience</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
        <AnimatedBackground />
      </main>
      <footer>
        <div className="col1">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/">Experience</Link>
            </li>
          </ul>
        </div>

        <div className="col2">
          <p>Copyright by Kamil Kałuża</p>
          <p className="iconsC">Icons from Icons8.com</p>
          <div className="icons">
            <a href="https://github.com/MietoProgramming">
              <img src="./github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/kaluzakamil/">
              <img src="./linkedin.png" alt="linkedin" />
            </a>
            <a href="kamil.kaluza25@gmail.com">
              <img src="./gmail.png" alt="gmail" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
