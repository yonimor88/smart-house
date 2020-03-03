import React, { useState } from "react";
import smart_home_logo from "./smart-home-logo.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="Header">
      <Link id="link" to="/">
        <img id="logo" src={smart_home_logo} alt="logo" />
      </Link>
      <Link to="/room">room</Link>
    </div>
  );
}
