import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

function App() {
  const company = {
    name: 'Dinerito Feliz',
    slogan: '💸 Te estafaremos 💸'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Rodrigo Aranda'
  };

  return (
    <>
    <Header company={company}/>
    <Footer credits={credits}/>
    </>
    
    
  )
}

export default App
