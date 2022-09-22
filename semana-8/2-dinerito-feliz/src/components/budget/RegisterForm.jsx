import { useState } from "react";

const RegisterForm = ({ recordAmount  }) => {
  const [formBudget, setFormBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    recordAmount(formBudget);
  };

  const handleInput = (e) => {
    setFormBudget(e.target.value);
  };

  return (
    <div className="card w-75" style={{maxWidth:'512px'}}>
      <div className="card-body d-flex flex-column gap-3 ">
        <h2 className="text-primary text-center m-0">Presupuesto</h2>
        <form
          onSubmit={handleSubmit}
        >
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="formBudgetBudget"
              name="budget"
              placeholder="Presupuesto"
              required
              onInput={handleInput}
            />
            <label htmlFor="formBudgetBudget">Presupuesto</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold"
          >
            💸 Registrar 💸
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;