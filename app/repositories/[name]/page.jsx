import React from "react";
import RepoComponent from "@/components/Repo";
import Link from "next/link";
import RepoDirs from "@/components/RepoDirs";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/repositories" className="repo-btn">
        Back to repositories
      </Link>
      <div className="single-repo-container">
        <RepoComponent name={name} />
        <RepoDirs name={name} />
      </div>
    </div>
  );
};

export default RepoPage;
