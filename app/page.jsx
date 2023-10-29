"use client";
import Buttons from "@/components/Buttons";
import Link from "next/link";
import React from "react";

const Home = () => {
  const handleClick = () => {
    <Link href="/contact"></Link>;
  };
  return (
    <div>
      <main>
        <div className="left-clm">
          <div className="left-container">
            <h1>Welcome to Robert's!</h1>
            <p>
              Here you can find out more information about me, my works and my
              goals.
            </p>
            <div className="buttons">
              <Buttons text="Learn more!" onClick={handleClick} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
