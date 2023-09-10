import React from "react";
import "./Navigation.module.css";
import { Link } from "react-router-dom";
export const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className="container navbar">
      {/* // css taking from global app.css */}
      <Link style={brandStyle} to="/">
        <img width={50} src="/images/wave.png" alt="logo" />
        <span style={logoText}>Coder</span>
      </Link>
    </nav>
  );
};
