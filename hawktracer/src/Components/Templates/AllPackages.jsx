//React Core
import React, { useState } from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";

//Components
import Package from "../Organisms/Package"
import Header from "../Organisms/Header"

function AllPackages(data) {

const [status, setStatus] = useState(0);
const [information, setInformation]= useState([]);
const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

useEffect ( ()=> {
const getData = async () => {
    try{
        const response = await fetch(endpoint, { mode: "cors"});
        const data = await response.json();
        
        setInformation(data);
        setStatus(1);
    } catch {
        setStatus(2);
    }
};
getData();
},[]);


return (
    <div>
         <Link className="button" to="/">
          Back to home
        </Link>
    <Header/>
    
    {status === 1 ? <Package data ={information[0]}/> :<p>Loading</p>} 
    </div>
   
)
}

export default AllPackages;