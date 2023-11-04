import Link from "next/link";
import React from "react";

async function fetchRepoContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/robitu/${name}/contents`
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/repositories/${name}/${dir.path}`} className="dirs">
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
