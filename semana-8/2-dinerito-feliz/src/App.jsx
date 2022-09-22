import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import ManagerPage from './pages/ManagerPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const company = {
    name: '💸 Dinerito Feliz 💸',
    slogan: '💰 Si quieres ser estofado, paga por adelantado 💰'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Rodrigo Aranda'
  };

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expense, setExpense] = useState({
    description: '',
    amount: ''
  });
  const [expenses, setExpenses] = useState([]);

  const recordAmount = (amount) => {
    setBudget(amount);
    setRemaining(amount);
  };

  useEffect(() => {
    if (expense.amount) {
      setExpenses([
        ...expenses,
        expense
      ]);
      setRemaining(remaining - expense.amount);
      setExpense({ description: '', amount: '' });
    }
  }, [expense]);

  return (
    <>
      <Header company={company} />
      <main>
        {
          budget <= 0 ?
            <RegisterPage
              recordAmount={recordAmount}
            />
            :
            <ManagerPage
              budget={budget}
              remaining={remaining}
              setExpense={setExpense}
              expenses={expenses}
            />
        }
      </main>
      <Footer credits={credits} />
    </>
  );
}

export default App;