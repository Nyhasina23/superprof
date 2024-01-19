import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Course from "../components/Course";

const Home = () => {
  return (
    <div className="w-[70%] flex flex-col justify-center mx-auto">
      <NavBar />
      <Hero />
      <Category />
      <Course />
    </div>
  );
};

export default Home;
