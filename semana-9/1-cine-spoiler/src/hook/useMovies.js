import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const useMovies = () => {
  const context = useContext(MoviesContext);
  return (context);
};

export default useMovies;