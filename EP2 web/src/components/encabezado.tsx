import React from 'react';
import { IonToolbar, IonTitle, IonHeader } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './encabezado.css'; 


 import { useLocation } from 'react-router-dom';
 
 const Header: React.FC = () => {
   const history = useHistory();
   const location = useLocation();
 
   // Función que verifica si la ruta está activa
   const isActive = (path: string) => location.pathname === path ? 'active' : '';
 
   return (
     <div className="header">
       <a className={isActive('/menu-mascota')} onClick={() => history.push('/menu-mascota')}>
         <span className="ion--paw-outline"></span>
         Mis Mascotas
       </a>
       <a className={isActive('/perfil-usuario')} onClick={() => history.push('/perfil-usuario')}>
         <span className="profile"></span>
         Mi perfil
       </a>
       <a className={isActive('/opciones')} onClick={() => history.push('/opciones')}>
         <span className="icon--menu"></span>
       </a>
     </div>
   );
 };
 
 export default Header;
 
