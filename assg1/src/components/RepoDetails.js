import react, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchRepoDetails } from "../controllers/repoController";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const RepoDetails = () => {
  const { owner, repo } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

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
        <Button
          variant="primary"
          as={Link}
          to={`/owner/${repoDetails.owner.login}`}
        >
          Check Out More By <b>{repoDetails.owner.login}</b>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RepoDetails;
