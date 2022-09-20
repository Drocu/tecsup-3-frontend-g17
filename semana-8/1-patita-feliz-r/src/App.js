import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import AppointmentsPage from './pages/AppointmentsPage';

function App() {
  const company = {
    name: 'Patita Feliz',
    slogan: '🐭 ¡La mejor veterinaria! Porque los amamos, los cuidamos 🐭'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Elliot Garamendi'
  };

  return (
    <>
      <Header company={company} />
      <main className="overflow-hidden">
        <AppointmentsPage />
      </main>
      <Footer credits={credits} />
    </>
  );
}

export default App;