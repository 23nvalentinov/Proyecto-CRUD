import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Edit() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`/get_student/${id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        axios
            .post(`/edit_user/${id}`, data[0])
            .then((res) => {
                navigate("/");
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="container">
            <h3>Editar Estudiante {id}</h3>
            <Link to="/" className="btn btn-success">
                Inicio
            </Link>
            {data.map((student) => {
                return (
                    <form onSubmit={handleSubmit} key={student.id}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                value={student.name}
                                type="text"
                                name="name"
                                required
                                onChange={(e) =>
                                    setData([{ ...data[0], name: e.target.value }])
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo</label>
                            <input
                                value={student.email}
                                type="email"
                                name="email"
                                required
                                onChange={(e) =>
                                    setData([{ ...data[0], email: e.target.value }])
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Género</label>
                            <input
                                value={student.gender}
                                type="text"
                                name="gender"
                                required
                                onChange={(e) =>
                                    setData([{ ...data[0], gender: e.target.value }])
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Edad</label>
                            <input
                                value={student.age}
                                type="number"
                                name="age"
                                required
                                onChange={(e) =>
                                    setData([{ ...data[0], age: e.target.value }])
                                }
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">
                                Guardar
                            </button>
                        </div>
                    </form>
                );
            })}
        </div>
    );
}

export default Edit;