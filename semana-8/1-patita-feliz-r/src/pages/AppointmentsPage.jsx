const AppointmentsPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Cita Creada');
    };

const handleInput = (e) => {
    console.log(e.target.value);
};

    return ( 
        <section>
            <div className="container">
                <div className="row">
                    <section className="d-flex flex-column gap-3 col-md-4">
                        <h3 className="text-warning text-center">😺 Cita 😺</h3>
                        <form onSubmit={handleSubmit}>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="name" placeholder="Nombre de la Mascota" onChange={handleInput} required/>
                                <label htmlFor="floatingInput">Nombre de la Mascota</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="name" placeholder="Nombre del Propietario" onChange={handleInput} required/>
                                <label htmlFor="floatingInput">Nombre del Propietario</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" name="date" placeholder="Fecha" onChange={handleInput} required/>
                                <label htmlFor="floatingInput">Fecha</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="time" className="form-control" name="hour" placeholder="Hora" onChange={handleInput} required/>
                                <label htmlFor="floatingInput">Hora</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="sympton" placeholder="Síntomas" onChange={handleInput} required/>
                                <label htmlFor="floatingInput">Síntomas</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-warning text-dark w-100 fw-bold" type="submit">Crear</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </section>
     );
}
 
export default AppointmentsPage;