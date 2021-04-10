import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart, square} from 'ionicons/icons'

import HeaderLogo from '../components/HeaderLogo';
import Notifiche from '../components/Notifiche';


const Tab1: React.FC = () => {
  return (
      <IonPage>
        <HeaderLogo/>
      <IonContent>
        Tab 1
        <IonButton href="login">APRI LOGIN PAGE</IonButton>
        <IonButton href="/home/questionary">APRI DEMO QUESTIONARIO</IonButton>
        <IonButton onClick={() => Notifiche.schedule()}>Notifiche</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
