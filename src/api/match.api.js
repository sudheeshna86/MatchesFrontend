import apiClient from "./apiClient";

export const fetchMatches = ({ sport, search } = {}) => {
  const params = new URLSearchParams();

  if (sport) params.append("sport", sport);
  if (search) params.append("search", search);

  return apiClient.get(`/matches?${params.toString()}`);
};
