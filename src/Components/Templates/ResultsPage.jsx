//React Core
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//Components
import Header from "../Organisms/Header";
import Package from "../Organisms/Package";

export default function ResultsPage({information}){

    //Data
    const {query} = useParams();
     
    const checkItem = information.filter(item => item.parcel_id.match(query))[0];

    
    return (<div className="ResultsPage">
            <Header />
            <Link className="button" to="/">
            Back to home
            </Link>
            <div className="container"> 
            <Package data={checkItem} />
            </div>
            </div>)
}
