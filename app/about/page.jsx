import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="about-page">
      <Image
        src={"/images/profile.jfif"}
        alt={`X logo  `}
        width={460}
        height={460}
      />
      <h1>About Me</h1>
      <p>
        Hello, my name is Roberto Iturralde and I'm a software engineer and a
        Chainlink Community Advocate. I am passionate about technology and
        specifically Web3. I believe Web3 is the future and I'm all in for
        helping push this industry forward!
      </p>
      <p>
        Coming from a physics background, I love to see how things work in their
        deepest levels. I love problem solving and digging deeper into any topic
        I find interesting is my hobby. After my graduation, I decided to take a
        small break from University and focus on my career goals and
        aspirations. It was during this time that I encountered the idea of
        Web3.{" "}
      </p>
      <p>
        My journey began when Bitcoin became very popular in 2017, not
        understanding what "decentralized peer-to-peer transactions" meant, I
        jumped into the rabbit hole of this novel technology. Through my
        research I began to understand the cornerstones of this industry:
        Blockchains, Smart Contracts, Oracles, and decentralization. I soon
        began understanding more about what happens under the hood with
        consensus mechanisms, PoS & PoW, the Ethereum Virtual Machine, hashing
        ,encryption, private and public wallets, signatures and much more.{" "}
      </p>
      <p>
        Through my journey I discovered Chainlink and what they offer to this
        space. Needless to say, after seeing their vision and their
        industry-standard services with a long and proven record, I was
        immediately drawn and hooked to it. So much so, that I began attending
        all their online and in-person events and became a community advocate. I
        am elated to be able to be part of this movement towards a verifiable
        and cryptographically guaranteed future.{" "}
      </p>
      <p>
        In 2020 I decided to take the leap and fully commit to becoming a
        software engineer and work for Chainlink Labs. With the very small
        programming experience I received at University and coupled with many
        many online resources, I have been teaching myself how to code. I have
        come such a long way and I'm very proud of myself, and there's still a
        lot more to do! The world is not going to change itself.{" "}
      </p>
      <p>
        I invite you to walk this journey with me as I keep improving myself and
        working towards my goals and aspirations, and likewise I wish for you,
        reader, to chase your dreams and make them a reality. I'm cheering for
        you and for us. To a better future!
      </p>
      <p className="tag">- Roberto Iturralde</p>
    </div>
  );
};

export default page;
