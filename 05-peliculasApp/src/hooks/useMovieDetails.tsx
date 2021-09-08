/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {movieDB} from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/credits.interface';
import {MovieFull} from '../interfaces/movie.interface';

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  movieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    cast: [],
    movieFull: undefined,
  });

  const getMoviesDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  useEffect(() => {
    getMoviesDetails();
  }, []);

  return {
    ...state,
  };
};
