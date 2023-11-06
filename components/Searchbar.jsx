"use client";
import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search repos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
