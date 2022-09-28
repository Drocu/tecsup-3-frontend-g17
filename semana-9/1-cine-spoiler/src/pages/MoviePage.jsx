import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/movie/MovieDetail";
import MovieHero from "../components/movie/MovieHero";
import Loader from "../components/section/Loader";
import useMovies from "../hook/useMovies";

const MoviePage = () => {
  const { id: movieId } = useParams();
  const { loading, movie, setMovie, readMovie } = useMovies();

  useEffect(() => {
    readMovie(movieId);
    
    return (() => {
      setMovie({});
    });
    
    // eslint-disable-next-line   
  }, [movieId]);

  useEffect(() => {
    document.title = `${movie.title} I Sin E Spoiler`;
  }, [movie]);

  if (loading || Object.keys(movie).length === 0) {
    return (<Loader />);
  } else {
    return (
      <>
        <MovieHero movie={movie} />
        <MovieDetail movie={movie} />
      </>
    );
  }

};

export default MoviePage;