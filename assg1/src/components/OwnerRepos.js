import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchOwnerRepos } from "../controllers/repoController";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavorites } from "../controllers/favoriteController";

const OwnerRepos = () => {
  const { owner } = useParams();
  const [repos, setRepos] = useState([]);
  const { favorites, handleFavoriteClick } = useFavorites();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchOwnerRepos(owner, page).then((data) => setRepos(data));
  }, [owner, page]);

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
            style={
              favorites.includes(repo.id) ? { backgroundColor: "#42f5e6" } : {}
            }
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

            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={favorites.includes(repo.id) ? SolidHeart : RegularHeart}
                  style={{ fontSize: "25px", margin: "10px" }}
                  onClick={() => handleFavoriteClick(repo.id)}
                />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Badge
                  bg="primary"
                  pill
                  style={{ padding: "5px", marginBottom: "5px" }}
                >
                  Stars: {repo.stargazers_count}
                </Badge>
                <Badge bg="primary" pill style={{ padding: "5px" }}>
                  Forks: {repo.forks_count}
                </Badge>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div>
        <Button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        {"    "}
        <Button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default OwnerRepos;
