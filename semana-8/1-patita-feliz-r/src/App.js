
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AppointmentsPage from './pages/AppointmentsPage';


function App() {
  const company = {
    name: 'Veterinaria Patita Feliz',
    slogan: '🐶 ¡La mejor veterinaria! Porque los amamos y los cuidamos. 🐶',
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Rodrigo Aranda'
  };

  return (
    <>
      <Header company={company}/>
      <main>
        <AppointmentsPage />
      </main>
      <Footer credits ={credits}/>
    </>
    
  );
}

export default App;
