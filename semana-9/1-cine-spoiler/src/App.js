import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MoviesProvider } from './context/MoviesContext';
import PrimaryLayout from './layouts/PrimaryLayout';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/peliculas">
            <Route path=":id" element={<MoviePage />} />
            <Route index element={<MoviesPage />} />
          </Route>
          <Route path="/nosotros" element={<AboutUsPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </MoviesProvider>
  );
}

export default App;