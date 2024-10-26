import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './style/perfilMascota.css';
import Footer from '../components/footer';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/encabezado';


const PerfilMascota: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <Header/>
        <IonContent>
          <div className="perfilMascota">
            <div className="cuadrado">
              <img src="https://newsweekespanol.com/wp-content/uploads/2023/12/Perros-dotados-scaled.webp" alt="Bakan" />
            </div>
            
            <div className="detalle">
              <div className="nombre">Bakan</div>
              <div>Beagle</div>
              <div>Perro</div>
              <div>17 de septiembre</div>
              <div>50kg</div>
            </div>

            <div className="eventos">
              <h3>Mis eventos</h3>
              <div className="bloqueEvento">
                <span>Cita Veterinario</span>
                <span>Lun. 12<br/>7:00 am</span>
              </div>

              <div className="bloqueEvento">
                <span>Paseo en parque</span>
                <span>Mie. 14<br/>7:00 am</span>
              </div>
              
              <div className="bloqueEvento">
                <span>Radiografía</span>
                <span>Dom. 18<br/>12:00 am</span>
              </div>

              <a onClick={() => history.push('/agendar-evento')} className="agregarEvento">+</a>
              
          
            </div>

            <div className="buttons">
            <a onClick={() => history.push('/editar-mascota')}>
                <button className="editarMascota">Editar Perfil</button>
              </a>
              <a onClick={() => history.push('/perfil-mascota')}>
                <button className="eliminarPerfil">Eliminar Perfil</button>
              </a>
            </div>
          </div>
        </IonContent>
        <Footer />
    </IonPage>
  );
};

export default PerfilMascota;

