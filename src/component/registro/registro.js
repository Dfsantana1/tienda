import React, { useState } from 'react';
import axios from 'axios';
import './registro.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar los datos al backend
    axios.post('http://localhost:5000/crear-registro', {
      nombre: name,
      email: email,
      contraseña: password,
    })
      .then(response => {
        if (response && response.data) {
          console.log(response.data.message); // Mensaje de éxito del backend
          // Realiza las acciones necesarias después de crear el registro, como redireccionar al usuario o mostrar un mensaje de éxito
        } else {
          console.error('La respuesta no contiene la propiedad "data"');
        }
      })
      .catch(error => {
        console.error(error.response.data.error); // Mensaje de error del backend
        // Realiza las acciones necesarias en caso de error
      });
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
