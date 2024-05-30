import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { fetchOwnerRepos } from "../controllers/repoController";

const OwnerRepos = () => {
    const {owner} = useParams();
    const [repos, setRepos]= useState([]);

    useEffect(()=>{
        fetchOwnerRepos(owner).then(data=> setRepos(data)); },[owner]
    );

    return (
        <div>
            <h1>Repositories By {owner}</h1>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <Link to={`/repo/${repo.full_name}`}>{repo.name}</Link>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

export default OwnerRepos;