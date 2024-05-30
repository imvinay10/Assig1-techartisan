import { useEffect } from "react";
import {fetchRepo} from "../controllers/repoController"

const repoList = () => {
    const [repos, setRepo] = useState([]);

    useEffect(()=> {
            fetchRepo().then(data =>setRepo(data));
    },[]);

    return
    console.log(data);
}

export default repoList;
