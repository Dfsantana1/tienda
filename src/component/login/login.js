import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import NavBar from '../utils/navbar';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para autenticar al usuario,
    // como enviar una solicitud HTTP a un servidor.

    // Por ejemplo, puedes mostrar los valores del formulario en la consola:
    console.log('Email:', email);
    console.log('Password:', password);

    // Después de autenticar al usuario, puedes realizar otras acciones,
    // como redireccionarlo a otra página.
  };

  const handleForgotPassword = () => {
    // Lógica para redirigir o mostrar el formulario de recuperación de contraseña
    console.log('Olvidé mi contraseña');
  };

  return (
    <div>
       <NavBar />
    <div className="login-container">
     
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
        <div className="login-form-links">
          <button type="button" className="register-button">
            <Link to="/registro">Registrar</Link>
          </button>
          <button type="button" className="forgot-password-button" onClick={handleForgotPassword}>
            Olvidé mi contraseña
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
