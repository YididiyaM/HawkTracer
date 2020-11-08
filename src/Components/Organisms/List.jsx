//React Core
import React, { useState } from "react";
import { useEffect } from "react";
import { setStatus } from "react";

export default function Packages() {
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


    return information;
}

