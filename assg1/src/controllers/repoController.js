import axios from "axios";
const BASE_URL = "https://api.github.com";

export const fetchRepo = async (page) => {
  const response = await axios.get(
    `${BASE_URL}/repositories?per_page=100&page=${page}`
  );
  return response.data;
};

export const fetchRepoDetails = async (owner, repo) => {
  const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`);
  return response.data;
};

export const fetchOwnerRepos = async (owner, page) => {
  const response = await axios.get(
    `${BASE_URL}/users/${owner}/repos?per_page=100&page=${page}`
  );
  console.log(response.data);
  return response.data;
};
