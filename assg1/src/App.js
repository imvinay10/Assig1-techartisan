import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard'; 
import RepoDetailsView from './views/RepoDetailsView';
import OwnerRepoView from './views/OwnerRepoView';
// import {RepoList} from "../components/RepoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repo/:owner/:repo" Component={RepoDetailsView} />
        <Route path="/owner/:owner" Component={OwnerRepoView} />
      </Routes>
    </Router>
  );
}

export default App;