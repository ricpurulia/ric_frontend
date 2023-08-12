import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/Image/logo.png";
import AOS from "aos";
import "../Assets/Css/Navbar.css";

const Navbar = () => {
  let location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Sticky nav bar
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").classList.add("bg-light", "shadow");
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    if (currentScrollpos === 0) {
      document.getElementById("navbar").classList.remove("bg-light", "shadow");
    }
    prevScrollpos = currentScrollpos;
  };
  return (
    <div>
      {/* Nav bar */}
      <nav id="navbar">
        <Link to="/" className="logo" data-aos="fade-down">
          <img src={logo} alt="" />
        </Link>
        <div className="bx bx-menu" id="menu-icon"></div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i style={{ color: "black" }} className="fas fa-bars "></i>
        </label>
        <ul data-aos="fade-down">
          <li>
            <Link
              className={`${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${location.pathname === "/events" ? "active" : ""}`}
              to="/events"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              className={`${location.pathname === "/projects" ? "active" : ""}`}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`${location.pathname === "/members" ? "active" : ""}`}
              to="/members"
            >
              Members
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/aboutUs" ? "active" : ""
              }`}
              to="/aboutUs"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
