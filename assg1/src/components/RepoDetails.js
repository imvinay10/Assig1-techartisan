import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchRepoDetails } from "../controllers/repoController";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SolidHeart, RegularHeart } from "../Assets/Icons";
import { useFavorites } from "../controllers/favoriteController";

const RepoDetails = () => {
  const { owner, repo } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);
  const { favorites, handleFavoriteClick } = useFavorites();

  useEffect(() => {
    fetchRepoDetails(owner, repo).then((data) => setRepoDetails(data));
  }, [owner, repo]);

  if (!repoDetails) {
    return <div>Loading please wait...</div>;
  }

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Img variant="top" src={repoDetails.owner.avatar_url} />
        <Card.Title>
          <span>Repository: {repoDetails.name}</span>
        </Card.Title>
        <Card.Subtitle>
          <span>Owned by: {owner}</span>
        </Card.Subtitle>
        <Card.Text>
          <span>
            <b>About :</b> {repoDetails.description}
          </span>
        </Card.Text>
        <Card.Text>
          <span>
            <b>Stars :</b>{" "}
            <Badge bg="primary" pill>
              {repoDetails.stargazers_count}
            </Badge>
          </span>
        </Card.Text>
        <Card.Text>
          <span>
            <b>Forks :</b>{" "}
            <Badge bg="primary" pill>
              {repoDetails.forks_count}
            </Badge>
          </span>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="primary"
            as={Link}
            to={`/owner/${repoDetails.owner.login}`}
          >
            Check Out More By <b>{repoDetails.owner.login}</b>
          </Button>
          <FontAwesomeIcon
            icon={
              favorites.includes(repoDetails.id) ? SolidHeart : RegularHeart
            }
            style={{ fontSize: "30px" }}
            onClick={() => handleFavoriteClick(repoDetails.id)}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RepoDetails;
