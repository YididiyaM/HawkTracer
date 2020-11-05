// React core
import '..//../Style/Modules/Header.css';
import React from "react";
import { Link } from "react-router-dom";


// Media assets
import logo from "..//../images/logo.png";

export default function Header() {
  // Render
  return (
    <header className={"header"}>
      
       <span> 
           <h2>Hawk</h2>
           </span>

           <span>
            <img src={logo} alt="Logo" />
        </span>
     
    </header>
  );
}