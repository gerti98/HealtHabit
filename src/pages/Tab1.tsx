import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart} from 'ionicons/icons'

import HeaderLogo from '../components/HeaderLogo';


const Tab1: React.FC = () => {
  return (
      <IonPage>
        <HeaderLogo/>
      <IonContent>
        Tab 1
        <IonButton href="login">APRI LOGIN PAGE</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
