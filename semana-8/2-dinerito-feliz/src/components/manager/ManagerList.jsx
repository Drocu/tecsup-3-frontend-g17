import ManagerItem from "./ManagerItem";

const ManagerList = ({ budget, expenseList }) => {
  return (
    <section className="col-md-6 d-flex flex-column gap-3">
      <h2 className="text-primary text-center m-0">💵 Egresos ({budget}) 💵</h2>
      <ul className="list-group">
        {
          expenseList.length === 0 ?
            <li className="list-group-item d-flex justify-content-center align-items-center">
              <span className="badge bg-primary rounded-pill">Registre su primer egreso</span>
            </li>
            :
            expenseList.map((element, index) => {
              return (
                <ManagerItem
                  key={index}
                  element={element}
                />
              );
            })
        }
      </ul>
    </section>
  );
};

export default ManagerList;