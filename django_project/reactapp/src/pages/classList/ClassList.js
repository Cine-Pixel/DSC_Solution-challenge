import React, { useEffect, useState } from "react";
import "./ClassList.css";
import ClassCard from "../../components/classCard/ClassCard";

export default function ClassList() {
  const [classes, setClasses] = useState([]);

  const getClasses = async () => {
    await fetch("/api/rooms/")
      .then((response) => response.json())
      .then((data) => setClasses(data));
  };

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div className="class-list">
      {classes.map(cl => <ClassCard id={cl.id} cl={cl} />)}
    </div>
  );
}
