import React from 'react';
import { useHistory } from 'react-router-dom';  
import './style/menuMascota.css';

import perro0 from './assets/images/perro0.jpg';  
import perro1 from './assets/images/perro1.webp';
import Header from '../components/encabezado';
import Footer from '../components/footer';
import {  IonPage,IonContent} from '@ionic/react';

const MenuMascota: React.FC = () => {
  const history = useHistory();

  const handleProfileClick = () => {
    history.push('/perfil-mascota');  
  };

  const handleAgregarMascota = () => {
    history.push('/agregarMascota');  
  };

  return (
    <IonPage>
    <Header/>
    <IonContent>
    <div className="container">
      <a className="bloquePerfil" onClick={handleProfileClick}>
        <div className="cuadrado"><img src={perro0} alt="Bakan" /></div>
        <div>
          <p className="nombre">Bakan</p>
          <p className="raza">Beagle</p>
        </div>
      </a>

      <a className="bloquePerfil" onClick={handleProfileClick}>
        <div className="cuadrado"><img src={perro1} alt="Benji" /></div>
        <div>
          <p className="nombre">Benji</p>
          <p className="raza">Pastor aleman</p>
        </div>
      </a>

      
      <a onClick={() => history.push('/agregar-mascota')} className="agregarMascota">+</a>

    </div>
    </IonContent>
    <Footer />
    </IonPage>
  );
};

export default MenuMascota;


