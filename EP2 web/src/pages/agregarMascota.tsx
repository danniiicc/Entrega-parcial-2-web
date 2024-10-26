import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './style/agregarMascota.css';
import Header from '../components/encabezado';
import Footer from '../components/footer';

const AgregarMascota: React.FC = () => {
  return (
    <IonPage>
      <Header/>
        <IonContent>


          <div className="bloqueEditar">
            <h2>Crear Perfil de Mascota</h2>

            <div className="form-group">
              <label htmlFor="nombre">Nombre de la Mascota</label>
              <input type="text" id="nombre" name="nombre" placeholder="Nombre de la Mascota" />
            </div>

            <div className="form-group">
              <label htmlFor="especie">Especie</label>
              <select id="especie" name="especie">
                <option value="" disabled>Selecciona una especie</option>
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="raza">Raza</label>
              <input type="text" id="raza" name="raza" placeholder="Raza" />
            </div>

            <div className="form-group">
              <label htmlFor="cumpleanos">Fecha de Cumpleaños</label>
              <input type="text" id="cumpleanos" name="cumpleanos" placeholder="DD-MM" />
            </div>

            <div className="form-group">
              <label htmlFor="peso">Peso</label>
              <input type="text" id="peso" name="peso" placeholder="Peso" />
            </div>

            <div className="container-imgM">
              <img className="imgPerfil" src="https://t1.ea.ltmcdn.com/es/posts/1/6/2/10_curiosidades_del_golden_retriever_21261_600.jpg" alt="Foto de la Mascota" />
              <button className="subirFoto" type="button">Subir Foto</button>
            </div>

            <div className="botones">
              <button className="guardarPerfil" type="button">Guardar Perfil</button>
              <button type="button" className="cancelar" onClick={() => window.location.href = '/menu-mascota'}>Cancelar</button>
              
            </div>
          </div>

        </IonContent>
        <Footer />
    </IonPage>
  );
};

export default AgregarMascota;