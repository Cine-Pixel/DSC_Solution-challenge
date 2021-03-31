import React from "react";
import "./ClassDetail.css";
import { Assignment, ClassHeader } from "../../components";

export default function ClassDetail() {
  return (
    <div>
      <ClassHeader />
      <div className="class-content">
        <Assignment />
        <Assignment />
        <Assignment />
        <Assignment />
        <Assignment />
        <Assignment />
      </div>
    </div>
  );
}
