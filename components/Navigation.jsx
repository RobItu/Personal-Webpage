import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

const Navigation = () => {
  return (
    <header className="nav-container">
      <div className="logo">
        <Link href="/">
          <Image
            src="/images/bob.svg"
            width={180}
            height={90}
            alt="My company logo"
            className="logo"
          />{" "}
        </Link>
      </div>
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
    </header>
  );
};

export default Navigation;
