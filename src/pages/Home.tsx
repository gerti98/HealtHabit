import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonImg,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { useContext } from "react";
import { useHistory } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../components/use-reducer-context";
import { Redirect, Route } from "react-router-dom";
import {
  buildOutline,
  documentsOutline,
  ellipse,
  linkOutline,
  personOutline,
  square,
  triangle,
} from "ionicons/icons";

import "../theme/Home.css";

import Profilo from "./Profilo";
import Fascicolo from "./Fascicolo";
import Homepage from "./Homepage";
import Login from "./Login";
import Link from "./Link";

import { IonReactRouter } from "@ionic/react-router";
import Questionary from "./Questionary";
import Impostazioni from "./Impostazioni";
import InfoVisita from "./InfoVisita";

const Home: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();
  return (
    <div>
      <IonFab
        vertical="bottom"
        horizontal="center"
        slot="fixed"
        className="fab-margin"
      >
        <IonFabButton onClick={() => history.push("/home/homepage")}>
          <IonImg src="assets/images/logo.png" />
        </IonFabButton>
      </IonFab>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home/profilo">
            <Profilo />
          </Route>
          <Route
            exact
            path="/home/questionary/:id"
            component={Questionary}
          ></Route>
          <Route
            exact
            path="/home/info_visita/:nome_visita"
            component={InfoVisita}
          ></Route>
          <Route exact path="/home/fascicolo">
            <Fascicolo />
          </Route>
          <Route path="/home/homepage">
            <Homepage />
          </Route>
          <Route path="/home/link">
            <Link />
          </Route>
          <Route path="/home/impostazioni">
            <Impostazioni />
          </Route>

          <Route exact path="/home">
            <Redirect to="/home/homepage" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Profilo" href="/home/profilo">
            <IonIcon icon={personOutline} />
          </IonTabButton>
          <IonTabButton tab="Fascicolo" href="/home/fascicolo">
            <IonIcon icon={documentsOutline} />
          </IonTabButton>
          <IonTabButton tab="Homepage"></IonTabButton>
          <IonTabButton tab="Link" href="/home/link">
            <IonIcon icon={linkOutline} />
          </IonTabButton>
          <IonTabButton tab="Impostazioni" href="/home/impostazioni">
            <IonIcon icon={buildOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </div>
  );
};

export default Home;
