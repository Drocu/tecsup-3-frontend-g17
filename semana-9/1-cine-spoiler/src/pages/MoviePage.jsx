import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovies from "../hook/useMovies";

const MoviePage = () => {
    const {id: movieId } = useParams();
    const {movie, readMovie} = useMovies();

    // const { backdrop_path, genres, homepage, original_language, original_title, overview, poster_path, release_date } = movie;
    const { backdrop_path, genres, homepage, original_language, original_title, overview, poster_path, release_date } = movie;

    useEffect(() => {
        document.title = 'Película I Sin E Spoiler';
        readMovie(movieId);
        // eslint-disable-next-line
    }, []);

    return ( 
        <section>
            <img src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}/w1280${backdrop_path}`} alt={original_title} width="100%" height="75%" />
            <div className="elements">
                <div>
                <img src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}/w500${poster_path}`} alt={original_title} width="37.5%" height="50%" />
                </div>
                <div>
                <h2 className="card__title">Synopsis</h2>
                <h4 className="card__text">{overview}</h4>
                </div>
                <div>
                <h2 className="card__title">Release date</h2>
                <h4 className="card__text">{release_date}</h4>
                </div>
                <div>
                <h2 className="card__title">Original language</h2>
                <h4 className="card__text">{original_language}</h4>
                </div>
                <div>
                <h2 className="card__title">Genres</h2>
                <h4 className="card__text">
                    {genres.map((element) => {
                    return element.name
                    }).join(', ')}
                </h4>
                </div>
                <a href={homepage} target="_blank" rel="noopener noreferrer" className="button button--primary">Ver ahora</a>
            </div>
    </section>
     );
};
 
export default MoviePage;