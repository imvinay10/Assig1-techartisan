import axios from "axios";
const BASE_URL = "https://api.github.com";

export const fetchRepo = async () => {
  const response = await axios.get(`${BASE_URL}/repositories`);
  return response.data;
};

export const fetchRepoDetails = async (owner, repo) => {
  const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`);
  return response.data;
};

export const fetchOwnerRepos = async (owner) => {
  const response = await axios.get(`${BASE_URL}/users/${owner}/repos`);
  console.log(response.data);
  return response.data;
};
