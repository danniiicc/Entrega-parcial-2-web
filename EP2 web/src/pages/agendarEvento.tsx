import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './style/agendarEvento.css';
import Header from '../components/encabezado';
import Footer from '../components/footer';
const AgendarEvento: React.FC = () => {
  const history = useHistory();  // Para manejar la navegación

  return (
    <IonPage>
      <IonContent fullscreen>
      <Header /> 
        <div className="seccion">
          <h2>Agendar Evento</h2>

          <div className="form-group">
            <label htmlFor="nombre-evento">Nombre de evento</label>
            <input type="text" id="nombre-evento" name="nombre-evento" placeholder="Nombre de evento" />
          </div>

          <div className="form-group">
            <label htmlFor="dia-evento">Día del evento</label>
            <input type="date" id="dia-evento" name="dia-evento" />
          </div>

          <div className="form-group">
            <label htmlFor="hora-evento">Hora del evento</label>
            <input type="time" id="hora-evento" name="hora-evento" />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion-evento">Descripción del evento</label>
            <textarea id="descripcion-evento" name="descripcion-evento" placeholder="Descripción del evento"></textarea>
          </div>

          <div className="botones">
            <button className="guardarPerfil" onClick={() => {/* lógica para guardar evento */}}>Guardar evento</button>
            <button className="cancelar" onClick={() => history.push('/perfil-mascota')}>Cancelar</button>
          </div>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default AgendarEvento;
