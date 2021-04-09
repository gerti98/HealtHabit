import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import GoogleBtn from '../components/GoogleBtn';
import { AppContext, userInterface } from '../components/use-reducer-context';
import '../theme/Login.css';


const Login: React.FC = () => {

  const {state, dispatch} = useContext(AppContext);
  const history = useHistory();

  function getData(userInformation:userInterface){
    dispatch(userInformation);
    history.push('/home');
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <GoogleBtn handleLogin={getData}/>
                </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
