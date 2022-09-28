import { useEffect } from "react";
import HomeHero from "../components/home/HomeHero";
import Loader from "../components/section/Loader";
import useMovies from "../hook/useMovies";

const HomePage = () => {
  const {loading, movies, readMovies} = useMovies();

  useEffect(() => {
    document.title = '¡Bienvenidos! I Sin E Spoiler';
    readMovies();
    // eslint-disable-next-line
}, []);

  if (loading){
    return(<Loader />);
  } else{
    return (
      <HomeHero movies={movies}/>         
    );
  }
    
  };
  
  export default HomePage;