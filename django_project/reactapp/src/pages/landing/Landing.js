import React from "react";
import "./Landing.css";
import land from "../../images/land.png";

export default function Landing() {
  return (
    <div className="landing">
      <h1>Thanks For Your Visit Lets Make Your Days Brighter</h1>
      <a href="/" className="btn btn-join">
        Join Class
      </a>
      <img src={land} alt="One person passing something to another" />
    </div>
  );
}
