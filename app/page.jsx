import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      Home
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
