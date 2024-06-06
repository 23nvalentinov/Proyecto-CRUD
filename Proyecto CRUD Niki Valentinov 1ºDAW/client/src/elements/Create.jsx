import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    });

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('/add_user', values)
            .then((res) => {
                navigate('/');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='container'>
            <h3>Agregar Estudiante</h3>
            <div className='d-flex justify-content-end'>
                <Link to='/' className='btn btn-success'>Inicio</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Nombre</label>
                    <input type='text' name='name' required onChange={(e) => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Correo</label>
                    <input type='email' name='email' required onChange={(e) => setValues({ ...values, email: e.target.value })} />
                </div>
                <div className='form-group'>
                    <label htmlFor='gender'>Género</label>
                    <input type='text' name='gender' required onChange={(e) => setValues({ ...values, gender: e.target.value })} />
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Edad</label>
                    <input type='number' name='age' required onChange={(e) => setValues({ ...values, age: e.target.value })} />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-success'>Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default Create;