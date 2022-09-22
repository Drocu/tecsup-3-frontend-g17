import { currencyFormat } from "../../utils/format";

const ManagerItem = ({ element }) => {
    const { description, amount } = element;
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center animate__animated animate__jackInTheBox"
      >
        <span className="fw-bold">{description}</span>
        <span className="badge bg-primary rounded-pill">{currencyFormat(amount)}</span>
      </li>
    );
  };
  
  export default ManagerItem;