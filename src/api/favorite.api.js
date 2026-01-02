import apiClient from './apiClient';

export const getFavorites = () => apiClient.get('/favorites');
export const addFavorite = (matchId) => apiClient.post(`/favorites/${matchId}`);
export const removeFavorite = (matchId) => apiClient.delete(`/favorites/${matchId}`);