import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { notifications } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import HeaderLogo from '../components/HeaderLogo';
import Notifiche from '../components/Notifiche';


const Tab2: React.FC = () => {
    
  return (
    <IonPage>
    <HeaderLogo/>
    <IonContent>
        <IonButton onClick={() => Notifiche.schedule()}>Notifiche</IonButton>
</IonContent>
</IonPage>
  );
};

export default Tab2;
