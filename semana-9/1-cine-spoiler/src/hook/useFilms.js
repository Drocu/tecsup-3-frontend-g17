import { useContext } from "react";
import { FilmsContext } from "../context/FilmsContext";

const useFilms = () => {
  const context = useContext(FilmsContext);
  return (context);
};

export default useFilms;