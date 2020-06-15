import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };

    const [error, setError] = useState(false);

    const submitCita = e => {
        e.preventDefault();

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
            hora.trim() === '' || sintomas.trim() === '') {
            setError(true)
            return;
        };

        setError(false)

        if(error === false) {
            setCita({
                mascota: '',
                propietario: '',
                fecha: '',
                hora: '',
                sintomas: ''
            })
        };

        cita.id = uuidv4();

        crearCita(cita)
    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    value={mascota}
                    onChange={handleChange}
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                />

                <label>Nombre propietario</label>
                <input
                    type="text"
                    name="propietario"
                    value={propietario}
                    onChange={handleChange}
                    className="u-full-width"
                    placeholder="Nombre del propietario"
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    value={fecha}
                    onChange={handleChange}
                    className="u-full-width"
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    value={hora}
                    onChange={handleChange}
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                />

                <label>Sintomas</label>
                <textarea 
                    name="sintomas"
                    value={sintomas}
                    onChange={handleChange}
                    className="u-full-width"
                />

                <button
                    type="submit"
                    className="button-primary u-full-width"
                >Agregar cita</button>
                
            </form>
        </Fragment>
     );
}
 
export default Formulario;