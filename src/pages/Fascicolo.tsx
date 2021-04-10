import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { notifications } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import HeaderLogo from '../components/HeaderLogo';
import ListaVisite from '../components/ListaVisite';
import Notifiche from '../components/Notifiche';
import '../theme/Fascicolo.css';


const Fascicolo: React.FC = () => {
    
  return (
    <IonPage>
      <HeaderLogo/>
      <IonContent>
          
          <ListaVisite/>
      </IonContent>
    </IonPage>
  );
};

export default Fascicolo;
