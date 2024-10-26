import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Para la redirección
import './style/registrarse.css';

const Registro: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [email, setEmail] = useState('');
    const [region, setRegion] = useState('');
    const [comuna, setComuna] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [rutError, setRutError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const history = useHistory();
  
    const validateRut = (rut: string) => {
        const regex = /^\d{1,8}[-]?([0-9kK])?$/;
        if (!regex.test(rut)) {
          setRutError('RUT inválido. Solo se permiten números y el dígito verificador (opcional).');
          return false;
        }
        setRutError('');
        return true;
      };
    
      const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|cl|arg|[a-z]{2,})$/; // Dominios válidos
        if (!regex.test(email)) {
          setEmailError('Correo electrónico inválido. Debe contener "@" y un dominio válido.');
          return false;
        }
        setEmailError(''); 
        return true;
      };
    
      const handleRegister = () => {
        // Validación de campos vacíos
        if (!nombre || !rut || !email || !region || !comuna || !password || !confirmPassword) {
          setErrorMessage('Por favor, rellena todos los campos.');
          return;
        }
    
        // Validación del RUT
        if (!validateRut(rut)) {
          return;
        }
    
        // Validación del correo
        if (!validateEmail(email)) {
          return;
        }
    
        // Validación de contraseña
        if (password !== confirmPassword) {
          setErrorMessage('Las contraseñas no coinciden.');
          return;
        }
    
        
        history.push('/menu-mascota');
      };
  

  return (
    <div className="registro-content">
      <div className="registro-container">
        <h2 className="centered-text">Registro</h2>
        <div className="input-container">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Introduce tu nombre"
          />
        </div>
        <div className="input-container">
          <label htmlFor="rut">RUT</label>
          <input
            type="text"
            id="rut"
            value={rut}
            onChange={e => {
              const value = e.target.value;
              
              if (/^[0-9kK]*$/.test(value)) {
                setRut(value);
                validateRut(value);
              }
            }}
            placeholder="Introduce tu RUT"
          />
          {rutError && <p className="error-message">{rutError}</p>} {/* Mensaje de error para RUT */}
        </div>
        <div className="input-container">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => {
              const value = e.target.value;
              setEmail(value);
              validateEmail(value); 
            }}
            placeholder="Introduce tu correo"
          />
          {emailError && <p className="error-message">{emailError}</p>} {/* Mensaje de error para correo */}
        </div>
        <div className="input-container">
          <label htmlFor="region">Región</label>
          <select id="region" value={region} onChange={e => setRegion(e.target.value)}>
            <option value="">Selecciona tu región</option>
            <option value="metropolitana">Metropolitana</option>
            <option value="valparaíso">Valparaíso</option>
            <option value="biobío">Biobío</option>
            
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="comuna">Comuna</label>
          <input
            type="text"
            id="comuna"
            value={comuna}
            onChange={e => setComuna(e.target.value)}
            placeholder="Introduce tu comuna"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => {
              const value = e.target.value;
              setPassword(value);
              
              if (value !== confirmPassword) {
                setPasswordError('Las contraseñas no coinciden.');
              } else {
                setPasswordError(''); 
              }
            }}
            placeholder="Introduce tu contraseña"
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={e => {
              const value = e.target.value;
              setConfirmPassword(value);
              // Validación en tiempo real de la contraseña
              if (value !== password) {
                setPasswordError('Las contraseñas no coinciden.');
              } else {
                setPasswordError(''); 
              }
            }}
            placeholder="Confirma tu contraseña"
          />
        </div>
        {/* Mensaje de error para la contraseña */}
        {passwordError && <p className="error-message">{passwordError}</p>} 
        
        {/* Mensaje de error general */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <button onClick={handleRegister} className="custom-button centered-button">Registrarse</button>

        <p className="login-prompt">
          ¿Ya tienes una cuenta? <a href="/iniciar-sesion">Iniciar sesión</a>
        </p>
      </div>
    </div>
    
  );
};

export default Registro;
