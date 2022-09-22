import { useState } from "react";

const ManagerForm = ({ setExpense  }) => {
  const [formExpense, setFormExpense] = useState({
    description: '',
    amount: ''
  });

  const { description, amount } = formExpense;

  const handleInput = (e) => {
    setFormExpense({
      ...formExpense,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpense(formExpense);

    setFormExpense({
      description: '',
      amount: ''
    });
  };

  return (
    <section className="col-md-6 d-flex flex-column gap-3">
      <h2 className="text-primary text-center m-0">💲 Registre sus egresos 💲</h2>
      <form
        onSubmit={handleSubmit}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="formExpenseDescription"
            name="description"
            placeholder="Presupuesto"
            value={description}
            required
            onInput={handleInput}
          />
          <label htmlFor="formExpenseDescription">Descripción</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="formExpenseAmount"
            name="amount"
            placeholder="Presupuesto"
            value={amount}
            required
            onInput={handleInput}
          />
          <label htmlFor="formExpenseAmount">Egreso</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 fw-bold"
        >
          💸 Registrar 💸
        </button>
      </form>
    </section>
  );
};

export default ManagerForm;