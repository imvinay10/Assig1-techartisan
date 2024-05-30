import { useEffect, useState } from "react";
import { fetchRepo } from "../controllers/repoController";
import { Link } from "react-router-dom";

export const RepoList = () => {
  const [repos, setRepo] = useState([]);

  useEffect(() => {
    fetchRepo().then((data) => setRepo(data));
  }, []);

  console.log(repos);

  return (
    <div className="repo-list">
      <h1>All Repositories List</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.full_name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
