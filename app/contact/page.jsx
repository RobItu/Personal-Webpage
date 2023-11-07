import React from "react";
import Image from "next/image";
import Link from "next/link";

const contactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-body">
        <div className="contact-card">
          <Link
            href={"https://twitter.com/ancientveil"}
            target="_blank"
            className="contact-btn"
          >
            <div>
              <Image
                src={"/images/X.svg"}
                alt={`X logo  `}
                width={72}
                height={72}
              />
            </div>
            <p>You can find me on Twitter!</p>
          </Link>
        </div>
        <div className="contact-card">
          <Link
            href={
              "mailto:your-email@example.com?subject=Feedback%20&%20Questions&body=Hi%20there,"
            }
            className="contact-btn"
          >
            <Image
              src={"/images/email.svg"}
              alt={`email logo`}
              width={75}
              height={75}
            />
            <p>Shoot me an email too!</p>
          </Link>
        </div>
        <div className="contact-card">
          <Link
            href={"https://www.github.com/robitu"}
            target="_blank"
            className="contact-btn"
          >
            <Image
              src={"/images/github.svg"}
              alt={`github logo`}
              width={75}
              height={75}
            />
            <p>Check out my GitHub page!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
