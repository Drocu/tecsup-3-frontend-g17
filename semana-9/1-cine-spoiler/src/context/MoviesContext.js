import axiosInstance from "../config/axiosInstance";
const { createContext, useState, useEffect } = require("react");

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
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};