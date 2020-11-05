// React core
import React from "react";


// Media assets
import logo from "..//../images/logo.png";

export default function Header() {
  // Render
  return (
    <header className={"header"}>
      <Link to="/">
          <h2>Hawk</h2>
        <img src={logo} alt="Logo" />
      </Link>

     
    </header>
  );
}