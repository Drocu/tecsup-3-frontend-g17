import { useEffect } from "react";

const MoviePage = () => {
    useEffect(() => {
        document.title = 'Película I Sin E Spoiler';
    }, []);

    return ( 
          <>
            <section               
                className="section section--hero"
                // style={{
                //     // eslint-disable-next-line
                //     ['--desktop-image']: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE}/w1280${backdrop_path})`,
                //     // eslint-disable-next-line
                //     ['--mobile-image']: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE}/w500${poster_path})`
                // }}
                >
                    <div className="container container--hero">
                        <div className="card">
                            <h2 className="card__title">Avatar RE Estreno</h2>
                            <h4 className="card__text"> Un paraplejito soldado de la marina es llevado a la luna de Pandora con una misión pero es retado entre seguir las ordenes dadas y proteger al mundo que considera como su hogar.</h4>
                        </div>

                    </div>
                    
                </section>
          </> 
     );
}
 
export default MoviePage;