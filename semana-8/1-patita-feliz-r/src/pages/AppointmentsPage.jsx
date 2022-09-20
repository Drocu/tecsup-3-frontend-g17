import { useEffect, useState } from "react";
import AppointmentsForm from "../components/appointments/AppointmentsForm";
import AppointmentsList from "../components/appointments/AppointmentsList";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('appointments')) ?? []);

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((element) => {
      return element._id !== id;
    }));
  };

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  return (
    <section className="py-3">
      <div className="container">
        <div className="row justify-content-between gap-4">
          <section className="d-flex flex-column gap-3 col-md-4 animate__animated animate__fadeInLeft">
            <h3 className="text-light text-center m-0">🐱 Crear cita 🐱</h3>
            <AppointmentsForm
              appointments={appointments}
              setAppointments={setAppointments}
            />
          </section>
          <section className="d-flex flex-column gap-3 col-md-6 animate__animated animate__fadeInRight">
            <h3 className="text-light text-center m-0">🐶 Citas 🐶</h3>
            <AppointmentsList
              appointments={appointments}
              deleteAppointment={deleteAppointment}
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default AppointmentsPage;