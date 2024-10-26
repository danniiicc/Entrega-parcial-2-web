import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/encabezado';
import Footer from '../components/footer';
import './style/perfilUsuario.css';
import perfilData from '../data/punto.json';

interface Perfil {
  nombre: string;
  rut: string;
  email: string;
  region: string;
  comuna: string;
  imagen: string;
}

const PerfilUsuario: React.FC = () => {
  const history = useHistory();
  const [perfil, setPerfil] = useState<Perfil | null>(null);

  useEffect(() => {
    // Usar los datos importados del archivo JSON
    const data = perfilData;

    // Establecer los datos del perfil desde el JSON
    setPerfil(data);
  }, []);

  if (!perfil) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className="bloquePerfil">
          <h2>Perfil del usuario</h2>
          <div className="container img">
            <img className="imgPerfil" src={perfil.imagen} alt="Perfil" />
          </div>
          <div className="detalle">
            <h3>Datos personales</h3>
            <p>Nombre: {perfil.nombre}</p>
            <p>Rut: {perfil.rut}</p>
            <p>Email: {perfil.email}</p>
            <p>Región: {perfil.region}</p>
            <p>Comuna: {perfil.comuna}</p>
          </div>

          <button className="button" onClick={() => history.push('/editar-usuario')}>
            Editar Perfil
          </button>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default PerfilUsuario;
