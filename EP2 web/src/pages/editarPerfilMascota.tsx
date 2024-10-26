import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './style/editarPerfilUsuario.css';
import Header from '../components/encabezado';
import Footer from '../components/footer';
const EditarMascota: React.FC = () => {
  const history = useHistory();  // Para manejar la navegación

  return (
    <IonPage>
      <IonContent>
      <Header /> 

        <div className="bloqueEditar">
          <h2>Editar Perfil de Mascota</h2>
          <div className="form-group">
            <label htmlFor="nombre">Nombre de la Mascota</label>
            <input type="text" id="nombre" name="nombre" placeholder="Bakan" />
          </div>

          <div className="form-group">
            <label htmlFor="especie">Especie</label>
            <select id="especie" name="especie">
              <option value="" disabled selected>Selecciona una especie</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="raza">Raza</label>
            <input type="text" id="raza" name="raza" placeholder="Golden" />
          </div>

          <div className="form-group">
            <label htmlFor="cumpleanos">Fecha de Cumpleaños</label>
            <input type="text" id="cumpleanos" name="cumpleanos" placeholder="17-10" />
          </div>

          <div className="form-group">
            <label htmlFor="peso">Peso</label>
            <input type="text" id="peso" name="peso" placeholder="50kg" />
          </div>

          <div className="container-imgM">
            <img className="imgPerfil" src="./assets/images/perro0.jpg" alt="Foto de la Mascota" />
            <button className="subirFoto" type="button">Subir Foto</button>

          </div>

          <div className="botones">
              <button type="submit" className="guardarPerfil">Guardar Perfil</button>
              <button type="button" className="cancelar" onClick={() => history.push('/perfil-mascota')}>Cancelar</button>
            </div>
        </div>
        
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default EditarMascota;
