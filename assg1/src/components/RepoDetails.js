import react, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { fetchRepoDetails } from '../controllers/repoController';

const RepoDetails = () => {
    const {owner, repo} = useParams();
    const [repoDetails, setRepoDetails] = useState(null);

    useEffect(() => {
        fetchRepoDetails(owner, repo).then(data => setRepoDetails(data));
    },[owner,repo]);
    if(!repoDetails){
        return <div>Loading please wait...</div>;
    }

    return (
        <div>
            <h1>Repository : {repoDetails.name}</h1>
            <p> Description : {repoDetails.description}</p>
            <p>Owner of repository: <Link to={`/owner/${repoDetails.owner.login}`}>{repoDetails.owner.login}</Link></p>
            <p>Stars: {repoDetails.stargazers_count}</p>
            <p>Forks: {repoDetails.forks_count}</p>
        </div>
    )
};

 export default RepoDetails;