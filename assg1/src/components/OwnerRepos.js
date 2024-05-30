import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchOwnerRepos } from "../controllers/repoController";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const OwnerRepos = () => {
  const { owner } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchOwnerRepos(owner).then((data) => setRepos(data));
  }, [owner]);

  return (
    <div className="repo-list">
      <div className="text-center">
        <h1>All Repositories By {owner}</h1>
      </div>
      <ListGroup as="ol" numbered>
        {repos.map((repo) => (
          <ListGroup.Item
            key={repo.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <span>Repository : </span>
                <Link to={`/repo/${repo.full_name}`}>{repo.name}</Link>
              </div>
              <span>
                <b>About :</b> {repo.description}
              </span>
            </div>
            <Badge bg="primary" pill>
              Stars : &nbsp;
              {repo.stargazers_count}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default OwnerRepos;
