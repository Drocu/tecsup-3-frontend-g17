import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
// https://image.tmdb.org/t/p/w1280

const HomeHero = ({movies}) => {
    return ( 
        <Swiper
        // install Swiper modules
            modules={[Navigation, Pagination, Autoplay, A11y]}
            autoplay={{delay: 5000}}
            loop
            navigation
            pagination={{ clickable: true }}
    >
        {[...movies].splice(0,6).map((element) => {
            const { backdrop_path, id, overview, title,poster_path} = element;
            return(
                <SwiperSlide 
                key={id}
                tag="section" 
                className="section section--hero"
                style={{
                    // eslint-disable-next-line
                    ['--desktop-image']: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE}/w1280${backdrop_path})`,
                    // eslint-disable-next-line
                    ['--mobile-image']: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE}/w500${poster_path})`
                }}
                >
                    <div className="container container--hero">
                        <div className="card">
                            <h2 className="card__title">{title}</h2>
                            <h4 className="card__text">{overview}</h4>
                            <button className="button button--primary">Ver más</button>
                        </div>

                    </div>
                    
                </SwiperSlide>
            );
        })}
      
    </Swiper>
     );
};
 
export default HomeHero;