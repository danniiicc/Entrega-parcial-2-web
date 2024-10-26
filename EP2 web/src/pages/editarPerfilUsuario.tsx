import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './style/perfilMascota.css';

import Header from '../components/encabezado';
import Footer from '../components/footer';
const EditarUsuario: React.FC = () => {
  const history = useHistory();  // Para manejar la navegación

  return (
    <IonPage>
      <Header/>
      <IonContent >

        <div className="bloqueEditar">
          <h2>Editar Perfil de Usuario</h2>
          <form action="#">
            <label className="etiqueta" htmlFor="username">Nombre de usuario</label>
            <input type="text" id="username" name="username" defaultValue="javierc" />

            <label className="etiqueta" htmlFor="rut">RUT</label>
            <input type="text" id="rut" name="rut" defaultValue="11111111-1" />

            <label className="etiqueta" htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" defaultValue="javierco@hotmail.com" />

            <label htmlFor="region">Región:</label>
            <select id="region" name="region" required>
  <option value="">Seleccione una región</option>
  <option value="region1" selected>Región 1</option>
  <option value="region2">Región 2</option>
</select>


            <label htmlFor="comuna">Comuna:</label>
            <select id="comuna" name="comuna" required>
              <option value="">Seleccione una comuna</option>
            </select>

            <img className="imgPerfil" src="https://cdn.futwiz.com/assets/img/fc25/faces/158023.png" alt="Foto de perfil" />
            <button className="subirFoto" type="button">Subir Foto</button>

            <div className="botones">
              <button type="submit" className="guardarPerfil">Guardar Perfil</button>
              <button type="button" className="cancelar" onClick={() => history.push('/perfil-usuario')}>Cancelar</button>
            </div>
          </form>
        </div>
        
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default EditarUsuario;
