import React from "react";
import "./Assignment.css";

export default function Assignment() {
  return (
    <div className="assignment">
      <div className="assignment__icon">
        <i class="fas fa-clipboard-list"></i>
      </div>
      <div className="assignment__info">
        <h4>Abraham Lincoln posted a new assignment: Freedom</h4>
        <span>Mar 31</span>
      </div>
    </div>
  );
}
