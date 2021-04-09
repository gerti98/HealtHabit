import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart} from 'ionicons/icons'
import "../theme/HeaderLogo.css"

const HeaderLogo: React.FC = () => {
  return (
    
        <IonHeader>
           <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={heart}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="TextLogoCenter">HealtHabit</IonTitle>
        </IonToolbar>
        
      </IonHeader>
  );
};

export default HeaderLogo;
