//React core
import React from "react";

// Component
import Header from "../Organisms/Header.jsx";

export default function HomePage({ information }) {
    return (
    <div className="home-page">
        <Header />
      
         <div className="search-bar">
        <input placeholder="Search" />
        <Link to="/ResultsPage">Search</Link>
        </div>
     
    </div>
  );
}