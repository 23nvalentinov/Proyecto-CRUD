import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)
    useEffect(()=>{
        if(deleted){
            setDeleted(false)
        axios.get('/students')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])

    function handleDelete(id){
        axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))
    }
  return (
    <div className='container'>
        <h3>BIENVENIDO A TU AGENDA</h3>
        <div className='d-flex justify-content-end mb-3'>
            <Link className='btn btn-success' to='/create'>Añadir Nuevo Estudiante</Link>
        </div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Genero</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student)=>{
                        return (<tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>
                                <Link className='btn btn-info mx-2' to={`/read/${student.id}`}>Consultar</Link>
                                <Link className='btn btn-warning mx-2' to={`/edit/${student.id}`}>Editar</Link>
                                <button onClick={()=>handleDelete(student.id)} className='btn btn-danger mx-2'>Eliminar</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home