import axiosInstance from "../config/axiosInstance";
const { createContext, useState } = require("react");

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);  
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  

  const readMovies = async () => {
    try {
      setLoading(true);
      const options = {
        method: 'GET',
        url: '/discover/movie?page=1'
      };
      const { data } = await axiosInstance(options);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const readMovie = async (id) => {
    try {
      setLoading(true);
      const options = {
        method: 'GET',
        url: `/movie/${id}`
      };
      const { data } = await axiosInstance(options);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };



  return (
    <MoviesContext.Provider
      value={{
        movie,
        movies,
        setMovie,
        readMovies,
        readMovie
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};