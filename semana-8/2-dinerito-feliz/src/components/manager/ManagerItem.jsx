const ManagerItem = ({ element }) => {
    const { description, amount } = element;
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className="fw-bold">{description}</span>
        <span className="badge bg-primary rounded-pill">{amount}</span>
      </li>
    );
  };
  
  export default ManagerItem;