import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  // Variable to get which 'route' you are in
  const location = useLocation();

  // This useEffect hook basically says whenever you change 'route'
  // (location), then turn off the navbar so it doesn't stay in the
  // expanded state
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    // This bit I need to read up about how the CSS works
    // But ultimately, when button is clicked, sets the id to open or closed
    // And then the CSS controls the styling to be expanded (or not)
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
        <a href="https://www.liamgower.dev"> Blog </a>
      </div>
    </div>
  );
}

export default Navbar;
