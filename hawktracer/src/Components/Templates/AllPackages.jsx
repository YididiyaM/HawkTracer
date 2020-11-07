//React Core
import React, { useState } from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";

//Components
import Package from "../Organisms/Package"
import Header from "../Organisms/Header"

function AllPackages() {

const [information, setInformation]= useState([]);
const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

useEffect ( ()=> {
const getData = async () => {
    
        const response = await fetch(endpoint, { mode: "cors"});
        const data = await response.json();
        
        setInformation(data);
};
getData();
},[]);

const Packages = information.map(item=> {
    return <Package key= {item.id} data= {item}/>;
}); 

return (
    <div>
         <Link className="button" to="/">
          Back to home
        </Link>
    <Header/>
    
     {Packages} 
    </div> 
   
)
}

export default AllPackages;