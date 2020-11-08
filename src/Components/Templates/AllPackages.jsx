//React Core
import React from 'react';
import { Link } from "react-router-dom";

//Components
import Package from "../Organisms/Package"
import Header from "../Organisms/Header"

//Style
import all_packages from "../../Style/Templates/all_packages.css"


function AllPackages({information}) {

    
const Packages = information.map(item=> {
    return <Package key= {item.id} data= {item}/>;
}); 

return (
    <div>
      <Header/>
         <Link className="button" to="/">
          Back to home
        </Link>
 
    
     {Packages} 
    </div> 
   
)
}

export default AllPackages;

