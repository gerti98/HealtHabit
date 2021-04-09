import { IonButton, IonContent, IonHeader, IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonToolbar, IonTitle, IonButtons } from '@ionic/react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { AppContext } from '../components/use-reducer-context';
import {Redirect, Route} from 'react-router-dom';
import {ellipse, square, triangle} from 'ionicons/icons'

import '../theme/Home.css';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { IonReactRouter } from '@ionic/react-router';

const Home: React.FC = () => {

  const {state, dispatch} = useContext(AppContext)
  const history = useHistory();
  return (
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/home/tab2">
            <Tab2 />
          </Route>
          <Route path="/home/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/home">
            <Redirect to="/home/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/home/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

  );
};

export default Home;
