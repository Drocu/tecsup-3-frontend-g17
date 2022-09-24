import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MoviesProvider } from './context/MoviesContext';
import PrimaryLayout from './layouts/PrimaryLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/peliculas" element={<h1>Peliculas</h1>} />
          <Route path="/nosotros" element={<h1>Nosotros</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </MoviesProvider>
  );
}

export default App;