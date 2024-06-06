# Introducción

Este proyecto es una aplicación web completa que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de estudiantes. Para su desarrollo, se han utilizado las siguientes tecnologías:

 - React para el frontend.
 - Express para el backend.
 - MySQL como base de datos.

# Estructura del Proyecto

El proyecto está dividido en dos partes principales: el cliente (frontend) y el servidor (backend).

project-root/
│
├── client/
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │   └── elements/
│   │       ├── Create.jsx
│   │       ├── Edit.jsx
│   │       └── Home.jsx
│   └── build/
│
├── server/
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── public/
│       ├── asset-manifest.json
│       ├── favicon.ico
│       ├── index.html
│       ├── logo192.png
│       ├── logo512.png
│       ├── manifest.json
│       ├── robots.txt
│       └── static/
│           └── css/
│
└── README.md


# Pasos Realizados para Crear el Proyecto

1. Configuración del Entorno de Desarrollo

     - Instalación de Node.js: Para gestionar las dependencias del proyecto y ejecutar scripts de desarrollo.
     - Instalación de MySQL y uso de XAMPP: Para gestionar la base de datos donde se almacenarán los datos de los estudiantes.

2. Creación de la Estructura del Proyecto


# Cliente (Frontend)

- React: Utilicé Create React App para inicializar el proyecto de React.
- Estructura de Archivos: La carpeta `client` contiene todos los archivos relacionados con el frontend, incluyendo componentes React (`Create.jsx`, `Edit.jsx`, `Home.jsx`), archivos de estilo (`App.css`, `index.css`), y archivos de configuración (`package.json`).

# Servidor (Backend)

    - Express: Utilicé Express para manejar las solicitudes y conectar con la base de datos MySQL.
    - Estructura de Archivos: La carpeta `server` contiene el archivo principal del servidor (`server.js`) y una carpeta `public` para archivos estáticos.

3. Configuración de la Base de Datos

# Creación de la Base de Datos y la Tabla

Ejecuté el siguiente script SQL en el servidor MySQL para crear la base de datos `students` y la tabla `student_details`:

CREATE DATABASE IF NOT EXISTS students;
USE students;

CREATE TABLE IF NOT EXISTS student_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(50) NOT NULL
);


# Configuración de las Credenciales de la Base de Datos

En el archivo `server.js`, configuré las credenciales de la base de datos para establecer la conexión:

javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'students'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});


# 4. Desarrollo de Funcionalidades CRUD

Frontend:
Componentes React: Creé componentes para manejar las operaciones CRUD:
    - Create.jsx: Para crear nuevos registros de estudiantes.
    - Edit.jsx: Para editar registros existentes.
    - Home.jsx: Para listar y eliminar registros.


Backend:
Rutas y Controladores: Implementé rutas en Express para manejar las solicitudes CRUD y finalmente conectarlas con la base de datos MySQL.