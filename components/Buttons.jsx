import React from "react";
import Link from "next/link";

const Buttons = () => {
  return (
    <div className="home-btns">
      <Link href="/contact">
        <button className="home-btn">Contact Me</button>
      </Link>
      <Link href="/repositories">
        <button className="home-btn">Repositories</button>
      </Link>
    </div>
  );
};

export default Buttons;
