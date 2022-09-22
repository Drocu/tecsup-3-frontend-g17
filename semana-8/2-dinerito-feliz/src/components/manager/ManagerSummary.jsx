import { currencyFormat,remainingClassName } from "../../utils/format";

const ManagerSummary = ({budget, remaining}) => {
    return (
      <div>
        <div class="alert alert-primary" role="alert">
          <span className="fw-bold">Presupuesto:</span> {currencyFormat(remaining)}
        </div>
        <div className={remainingClassName(budget, remaining)} role="alert">
          <span className="fw-bold">Restante:</span> {currencyFormat(remaining)}
        </div>
      </div>
    );
  };
  
  export default ManagerSummary;