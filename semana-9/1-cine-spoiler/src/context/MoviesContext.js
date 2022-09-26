import axiosInstance from "../config/axiosInstance";
const { createContext, useState } = require("react");

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

  const [movies, setMovies] = useState([]);

  const readMovies = async () => {
    try {
      const options = {
        method: 'GET',
        url: '/discover/movie?page=1'
      };
      const { data } = await axiosInstance(options);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <MoviesContext.Provider
      value={{
        movies,readMovies
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};