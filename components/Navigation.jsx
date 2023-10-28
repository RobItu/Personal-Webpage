import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

const Navigation = () => {
  return (
    <div className="nav-container">
      <Link href="/">
        <Image
          src="/images/bob.svg"
          width={180}
          height={90}
          alt="My company logo"
          className="logo"
        />{" "}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/repositories">Repositories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
