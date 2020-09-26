import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

function Navigation() {
  return (
    <div className="menu">
      <Link className="home" to="/">Home</Link>
      <Link className="about" to="/about">About</Link>
    </div>
  );
}

export default Navigation;
