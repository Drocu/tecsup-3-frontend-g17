import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MoviesProvider } from './context/MoviesContext';
import PrimaryLayout from './layouts/PrimaryLayout';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/peliculas">
            <Route path=":id" element={<MoviePage />} />
            <Route index element={<MoviesPage />} />
          </Route>
          <Route path="/nosotros" element={<h1>Nosotros</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </MoviesProvider>
  );
}

export default App;