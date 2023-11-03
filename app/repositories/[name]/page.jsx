import React from "react";
import RepoComponent from "@/components/Repo";
import Link from "next/link";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/repositories">Back to repositories</Link>

      <RepoComponent name={name} />
    </div>
  );
};

export default RepoPage;
