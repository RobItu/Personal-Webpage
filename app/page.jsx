"use client";
import Carousel from "@/components/Carousel";
import Buttons from "@/components/Buttons";
import Link from "next/link";
import React from "react";
import Searchbar from "@/components/Searchbar";

const Home = () => {
  const handleClick = () => {
    <Link href="/contact"></Link>;
  };

  return (
    <div>
      <main>
        <div className="left-container">
          <h1>Welcome to Robert's!</h1>
          <p>
            Here you can find out more information about me, my works and my
            goals.
          </p>
          <div className="buttons">
            <Buttons />
          </div>
        </div>
        <div className="right-container">
          <Carousel />
        </div>
      </main>
    </div>
  );
};

export default Home;
