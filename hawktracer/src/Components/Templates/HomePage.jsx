//React core
import React from "react";
import { Link } from "react-router-dom";

// Component
import Header from "../Organisms/Header.jsx";

export default function HomePage({ information }) {
    return (
    <div className="home-page">
        <Header />
         <div className="search-bar">
        <input placeholder="Enter the four-digit package Id" />
        <Link to="/ResultsPage">Search</Link>
        <Link to="/AllPackages">See all packages</Link>
        </div>
     
    </div>
  );
}