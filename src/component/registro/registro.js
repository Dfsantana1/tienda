import React, { useState } from 'react';
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
    // Aquí puedes realizar la lógica para registrar al usuario,
    // como enviar una solicitud HTTP a un servidor.

    // Por ejemplo, puedes mostrar los valores del formulario en la consola:
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Después de registrar al usuario, puedes realizar otras acciones,
    // como redireccionarlo a otra página o mostrar un mensaje de éxito.
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
