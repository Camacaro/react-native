import axios from 'axios';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e50e9b6b173e52df1ae08cc0e18bc903',
    language: 'es-ES',
  },
});
