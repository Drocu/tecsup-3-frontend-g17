import { useEffect } from "react";
import MoviesCards from "../components/movie/MoviesCards";
import useMovies from "../hook/useMovies";

const MoviesPage = () => {
  const { movies, readMovies } = useMovies();
  useEffect(() => {
    document.title = 'Películas I Sin E Spoiler';
    readMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="section">
      <div className="container elements">
        <h2 className="section__title">Películas</h2>
        <MoviesCards movies={movies} />
      </div>
    </section>
  );
};

export default MoviesPage;