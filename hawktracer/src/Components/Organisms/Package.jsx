// React core
import React from "react";
import { Link } from "react-router-dom";


export default function Package() {

  return (
    <article className="card">
      <Link to={`video/${id}`}>
        <img className="thumbnail" src={videoThumb} alt={description}></img>
      </Link>

      {/* This could be a sub-component (atom)? */}
      <aside className="meta-data">
        <div className="left">
          <img
            className="channel-thumb"
            src={channelThumb}
            alt="Channel thumbnail"
          />
        </div>
        <div className="right">
          <h3 className="title">{title}</h3>
          <p className="description">{channelName}</p>
          <p className="description">{views} views</p>
        </div>
      </aside>
    </article>
  );
}
