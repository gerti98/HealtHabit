import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { AppContext } from '../components/use-reducer-context';
import './Home.css';

const Home: React.FC = () => {

  const {state, dispatch} = useContext(AppContext)
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{state.nome}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonButton href="/login">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
