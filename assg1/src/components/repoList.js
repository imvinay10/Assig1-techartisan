import { useEffect, useState } from "react";
import { fetchRepo } from "../controllers/repoController";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

export const RepoList = () => {
  const [repos, setRepo] = useState([]);

  useEffect(() => {
    fetchRepo().then((data) => setRepo(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">All Repositories List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Repository</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo, index) => (
            <tr key={repo.id}>
              <td>{index + 1}</td>
              <td>
                <Link
                  to={`/repo/${repo.full_name}`}
                  className="text-decoration-none"
                >
                  {repo.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RepoList;
