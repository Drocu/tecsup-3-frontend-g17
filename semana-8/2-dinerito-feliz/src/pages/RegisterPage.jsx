import RegisterForm from "../components/budget/RegisterForm";

const RegisterPage = ({ setBudget }) => {
  return (
    <section className="py-3">
      <div className="container">
        <RegisterForm setBudget={setBudget} />
      </div>
    </section>
  );
};

export default RegisterPage;