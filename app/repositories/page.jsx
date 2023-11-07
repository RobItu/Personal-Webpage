"use client";
import React, { useEffect, useState } from "react";
import Searchbar from "@/components/Searchbar";
import Repositories from "@/components/Repositories";

const page = () => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch("https://api.github.com/users/robitu/repos");
      const data = await response.json();
      if (query != "") {
        const filteredData = data.filter((repo) =>
          repo.name.toLowerCase().includes(query.toLocaleLowerCase())
        );
        setRepos(filteredData);
      } else {
        setRepos(data);
      }
    }
    fetchRepos();
  }, [query]);
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <Searchbar
        getSearchResults={(searchResponse) => {
          setQuery(searchResponse);
        }}
      />
      <Repositories repos={repos} />
    </div>
  );
};

export default page;
