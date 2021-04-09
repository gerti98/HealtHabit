import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';


const Tab1: React.FC = () => {
  return (
      <IonPage>
           <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    Tab 1
    </IonContent>
</IonPage>
  );
};

export default Tab1;
