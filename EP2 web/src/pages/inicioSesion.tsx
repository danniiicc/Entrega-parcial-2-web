import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style/inicioSesion.css';

const inicioSesion: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|cl|arg|net|org)$/;
    return emailRegex.test(email);
  };

  // Comprobar si el correo es válido en tiempo real
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError('El correo no es válido. Debe contener "@" y terminar con un dominio válido.');
    } else {
      setEmailError('');  
    }
  };

  const handleRegisterRedirect = () => {
    history.push('/registrarse');
  };

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Por favor, rellena todos los campos.');
    } else if (!validateEmail(email)) {
      setErrorMessage('El correo no es válido.');
    } else {
      setErrorMessage('');
      
      history.push('/menu-mascota');
    }
  };

  return (
    <div className="login-content">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <div className="input-container">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange} 
            placeholder="Introduce tu correo"
          />
         
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Introduce tu contraseña"
          />
        </div>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <button onClick={handleLogin} className="custom-button">Iniciar Sesión</button>
        <p className="register-text">
          ¿No tienes cuenta? <span onClick={handleRegisterRedirect} className="register-link">Regístrate aquí</span>
        </p>
      </div>
    </div>
  );
};

export default inicioSesion;
