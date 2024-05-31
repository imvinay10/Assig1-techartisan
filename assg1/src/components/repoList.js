import { useEffect, useState } from "react";
import { fetchRepo } from "../controllers/repoController";
import {useFavorites} from "../controllers/favoriteController";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SolidHeart, RegularHeart } from '../Assets/Icons';
// import {useDispatch, useSelector} from "react-redux";
// import { toggleFavorite } from "../redux/actions";

export const RepoList = () => {
  const [repos, setRepo] = useState([]);
  const {handleFavoriteClick, favorites} = useFavorites();
  const [page, setPage] = useState(1);
  // const dispatch = useDispatch();
  // const favorites = useSelector(state => state.favorite.favorites);

  useEffect(() => {
    fetchRepo(page).then((data) => setRepo(data));
  }, [page]);

  // const handleFavoriteClick=(repoId)=>{
  //     dispatch(toggleFavorite(repoId));
  // };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">All Repositories List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Repository</th>
            <th>Favorite</th>
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
              <td>
                {" "}
                <FontAwesomeIcon
                  icon={favorites.includes(repo.id)? SolidHeart : RegularHeart}
                  style={{ fontSize: "20px", margin: "5px" }}
                  onClick={()=> handleFavoriteClick(repo.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
          
        { /*GitHub API Not supporting pagination for some reason. */}

      {/* <div>
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default RepoList;
