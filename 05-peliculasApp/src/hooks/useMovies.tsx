import {useState, useEffect} from 'react';
import {movieDB} from '../api/movieDB';
import {MovieDBMoviesResponse, Movie} from '../interfaces/movie.interface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise =
      movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upComingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const allPromise = [
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ];

    // Si una falla, todas fallaran
    const responses = await Promise.all(allPromise);

    setMoviesState({
      nowPlaying: responses[0].data.results,
      popular: responses[1].data.results,
      topRated: responses[2].data.results,
      upComing: responses[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
