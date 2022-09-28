import moment from "moment/moment";

const MovieDetail = ({ movie }) => {

  const { genres, homepage, original_language, original_title, overview, poster_path, release_date, runtime } = movie;
  return (
    <>
      <header className="section">
        <div className="container">
          <div className="elements">
            <h2 className="section__title">{original_title}</h2>
            <div className="elements elements--header-nav">
              <div className="elements elements--row">
                <span className="section__tag">{Math.floor(runtime / 60)} h {(runtime % 60)} min</span>
                <span className="section__tag">{moment(release_date).format("D MMM YYYY")}</span>
                <span className="section__tag">{original_language}</span>
              </div>
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                Ver Ahora
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="card card--movie">
            <div className="card__body card__body--movie">
              <img
                src={`${process.env.REACT_APP_TMDB_IMAGE_BASE}/w500${poster_path}`}
                alt={original_title}
                width="50%"
                height="auto"
                className="card__img"
              />
              <div >
                <h3 className="card__title">Sinopsis</h3>
                <p className="card__text">{overview}</p>
              </div>
              <div >
                <h3 className="card__title">Idioma original</h3>
                <span className="section__tag">{original_language}</span>
              </div>
              <div >
                <h3 className="card__title">Géneros</h3>
                <div className="elements elements--row">
                  {genres.map((element, index) => {
                    return (<span key={index} className="section__tag">{element.name}</span>);
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetail;