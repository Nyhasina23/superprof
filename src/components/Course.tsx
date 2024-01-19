import React from "react";
import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div className="mt-10">
      <div className="category-links w-full flex justify-between py-4">
        <h1 className="text-2xl font-bold">26 millions de professeurs particuliers évalués</h1>
      </div>
      <div className="category-card">
        <CourseCard />
      </div>
    </div>
  );
};

export default Course;
