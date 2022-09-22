import ManagerItem from "./ManagerItem";

const ManagerList = ({ expenses  }) => {
  return (
    <ul className="list-group">
      {
        expenses.length === 0 ?
          <li className="list-group-item d-flex justify-content-center align-items-center">
            <span className="badge bg-primary rounded-pill">Registre su primer egreso</span>
          </li>
          :
          expenses.map((element, index) => {
            return (
              <ManagerItem
                key={index}
                element={element}
              />
            );
          })
      }
    </ul>
  );
};

export default ManagerList;