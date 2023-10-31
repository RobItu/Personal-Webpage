import React from "react";
import Link from "next/link";

const Buttons = () => {
  return (
    <div className="home-btns">
      <Link href="/contact">
        <button className="contacts-btn">Learn more</button>
      </Link>
      <Link href="/repositories">
        <button className="contacts-btn">Repositories</button>
      </Link>
    </div>
  );
};

export default Buttons;
