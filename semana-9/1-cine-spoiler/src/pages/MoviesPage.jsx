import { useEffect } from "react";


const MoviesPage = () => {
    useEffect(() => {
        document.title = 'Películas I Sin E Spoiler';
    }, []);

    return ( 
    <h1>MoviesPage</h1> 
    );
};
 
export default MoviesPage;