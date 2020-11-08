// React core
import '..//../Style/Modules/Header.css';
import React from "react";


// Media assets
import logo from "..//../images/logo.png";

export default function Header() {
  // Render
  return (
    <header className={"header"}>
       <span> 
           <h2>hawk</h2>
           </span>

           <span>
             <img src={logo} className="logo" alt="Logo" />

        </span>
     
    </header>
  );
}
