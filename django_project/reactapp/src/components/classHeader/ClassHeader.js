import React from "react";
import "./ClassHeader.css";
import cov from "../../images/math.png";

export default function ClassHeader() {
  return (
    <div className="class-header-container">
      <div className="class-header__image-wrapper">
        <img src={cov} alt="class cover" />
      </div>
      <div className="class-header__info">
        <h1>Machine Learning</h1>
        <p>Some description</p>
      </div>
    </div>
  );
}
