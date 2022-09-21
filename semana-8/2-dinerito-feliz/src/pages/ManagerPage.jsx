import ManagerForm from "../components/manager/ManagerForm";
import ManagerList from "../components/manager/ManagerList";

const ManagerPage = ({ budget, expenseList, setExpenseList }) => {
  return (
    <section className="py-3">
      <div className="container">
        <section className="card">
          <div className="card-body">
            <div className="row g-4">
              <ManagerForm
                budget={budget}
                expenseList={expenseList}
                setExpenseList={setExpenseList}
              />
              <ManagerList
                budget={budget}
                expenseList={expenseList}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ManagerPage;