import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const Repositories = ({ repos }) => {
  return (
    <div className="repos-container">
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/repositories/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
