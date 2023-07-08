import React, { useState } from "react";
import axios from "axios";
import NavBar from "../utils/navbar";
import "./registro.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    axios
      .post("http://localhost:5000/register", {
        nombre: name,
        email: email,
        contraseña: password,
      })
      .then((response) => {
        if (response && response.data) {
          setSuccessMessage(response.data.message); // Mensaje de éxito del backend
          setErrorMessage(""); // Restablecer el mensaje de error
          // Realiza las acciones necesarias después de crear el registro, como redireccionar al usuario o mostrar un mensaje de éxito
        } else {
          console.error('La respuesta no contiene la propiedad "data"');
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.error); // Mensaje de error del backend
          setSuccessMessage(""); // Restablecer el mensaje de éxito
        } else {
          console.error(error);
        }
        // Realiza las acciones necesarias en caso de error
      });
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
