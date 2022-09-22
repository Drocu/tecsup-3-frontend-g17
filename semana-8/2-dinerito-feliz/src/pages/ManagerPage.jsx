import ManagerForm from "../components/manager/ManagerForm";
import ManagerList from "../components/manager/ManagerList";
import ManagerSummary from "../components/manager/ManagerSummary";

const ManagerPage = ({ budget, remaining, setExpense, expenses }) => {
  return (
    <section className="py-3 animate__animated animate__zoomIn">
      <div className="container">
        <section className="card">
          <div className="card-body">
            <div className="row g-4">
              <ManagerForm
                setExpense={setExpense}
              />
              
              {/* <ManagerExpense/> */}
              <section className="col-md-6 d-flex flex-column gap-3">
                <h2 className="text-primary text-center m-0">💵 Egresos 💵</h2>
                <ManagerSummary 
                budget={budget} 
                remaining={remaining}
                />
                <ManagerList
                  budget={budget}
                  expenses={expenses}
                />
              </section>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ManagerPage;