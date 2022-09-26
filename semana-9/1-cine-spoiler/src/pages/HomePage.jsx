import { useEffect } from "react";
import HomeHero from "../components/home/HomeHero";
import useMovies from "../hook/useMovies";

const HomePage = () => {
  const {movies, readMovies} = useMovies();

  useEffect(() => {
    readMovies();
    // eslint-disable-next-line
  }, []);
    return (
      <HomeHero movies={movies}/>         
    );
  };
  
  export default HomePage;