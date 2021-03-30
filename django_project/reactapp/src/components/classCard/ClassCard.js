import React from "react";
import "./ClassCard.css";

export default function ClassCard({cl}) {
  return (
    <div className="class-card">
      <div className="class-card__image-wrapper">
        <img src={cl.background} alt="Math background" />
      </div>
      <div className="class-card__title">
        <h2>{cl.name}</h2>
        <div className="class-card__info">
          <p>Due to: </p>
          <div className="deadline">
            <span>31/03/2021</span>
            <span>11:30PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
