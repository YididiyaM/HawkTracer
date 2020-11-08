// React core
import React from "react";

export default function Package({data}) {
    const {
        id, 
        eta,
        location_name,
        sender,
        status,
        parcel_id}=data

    return (
        <article className="package">
          <h4> Parcel id: {parcel_id}</h4>
          <p>Estimated time of arrival: {eta}</p>
          <p>Pick up location: {location_name}</p>
          <p>Sender: {sender}</p>
          <p>Status: {status}</p>
        </article>
    );
}
