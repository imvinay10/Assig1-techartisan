import { useEffect, useState } from "react";
import {fetchRepo} from "./controllers/repoController"

//fetch Testing
const App = () => {
    const [repos, setRepo] = useState([]);

    useEffect(()=> {
            fetchRepo().then(data => setRepo(data));
    },[]);

    return console.log(repos);
}

export default App;
