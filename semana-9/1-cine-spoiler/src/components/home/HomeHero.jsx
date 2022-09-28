import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const HomeHero = ({ movies }) => {
  // let backgroundImg = '';
  return (
    <Swiper
      tag="section"
      modules={[A11y, Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000 }}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      {[...movies].splice(0, 6).map((element) => {
        const { backdrop_path, id, overview, poster_path, title } = element;

        // window.innerWidth >= 768 ? backgroundImg = `/w1280${backdrop_path}` : backgroundImg = `/w500${poster_path}`;

        return (
          <SwiperSlide
            key={id}
            tag="section"
            className="section section--hero"
            style={{
              // backgroundImage: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE + backgroundImg})`
              "--desktop-bg-image": `url(${process.env.REACT_APP_TMDB_IMAGE_BASE}/w1280${backdrop_path})`,
              "--mobile-bg-image": `url(${process.env.REACT_APP_TMDB_IMAGE_BASE}/w500${poster_path})`
            }}
          >
            <div className="container container--hero">
              <div className="card card--hero">
                <h2 className="card__title card__title--hero">{title}</h2>
                <h4 className="card__text card__text--hero">{overview}</h4>
                <Link to={`/peliculas/${id}`} className="button button--primary">Ver más</Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};


export default HomeHero;