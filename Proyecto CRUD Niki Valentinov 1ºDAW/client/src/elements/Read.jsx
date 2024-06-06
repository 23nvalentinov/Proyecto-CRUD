import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Read() {
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

    return (
        <div className="container">
            <h3>Detalles del Estudiante {id}</h3>
            <Link to="/" className="btn btn-success">
                Inicio
            </Link>
            {data.map((student) => {
                return (
                    <div key={student.id}>
                        <p><strong>Nombre:</strong> {student.name}</p>
                        <p><strong>Correo:</strong> {student.email}</p>
                        <p><strong>Género:</strong> {student.gender}</p>
                        <p><strong>Edad:</strong> {student.age}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Read;