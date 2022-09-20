import AppointmentsItem from "./AppointmentsItem";

const AppointmentsList = ({ appointments, deleteAppointment }) => {
  return (
    <ul className="list-group">
      {
        appointments.length ?
          (
            appointments.map((appointment) => {
              return (
                <AppointmentsItem
                  key={appointment._id}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
                />
              );
            })
          )
          :
          (
            <li
              className="list-group-item list-group-item-action animate__animated animate__fadeInUp"
              aria-current="true"
            >
              <h4 className="fw-bolder m-0 text-center">No hay citas registradas</h4>
            </li>
          )
      }
    </ul>
  );
};

export default AppointmentsList;