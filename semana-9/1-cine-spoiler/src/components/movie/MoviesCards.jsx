import { Link } from "react-router-dom";

const MoviesCards = ({ movies }) => {
  return (
    <div className="cards">
      {
        movies.map((element, index) => {
          const { backdrop_path, id, title } = element;
          return (
            <div key={index} className="card card--movies">
              <Link to={`${id}`} className="card__header">
                <img
                  src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}/w300${backdrop_path}`}
                  alt={title}
                  width="100%"
                  height="auto"
                  className="card__header-img"
                />
              </Link>
              <div className="card__body card__body--movies">
                <h3 className="card__title card__title--movies">{title}</h3>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default MoviesCards;