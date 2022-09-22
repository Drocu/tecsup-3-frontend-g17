import RegisterForm from "../components/budget/RegisterForm";

const RegisterPage = ({ recordAmount  }) => {
  return (
    <section className="py-3 animate__animated animate__bounceIn">
      <div className="container d-flex justify-content-center">
        <RegisterForm recordAmount ={recordAmount } />
      </div>
    </section>
  );
};

export default RegisterPage;