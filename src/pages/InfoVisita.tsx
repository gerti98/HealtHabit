import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { notifications } from "ionicons/icons";
import React from "react";
import { RouteComponentProps } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import HeaderLogo from "../components/HeaderLogo";
import ListaVisite from "../components/ListaVisite";
import Notifiche from "../components/Notifiche";

interface IndexProps
  extends RouteComponentProps<{
    nome_visita: string;
  }> {}

const InfoVisita: React.FC<IndexProps> = ({ match }) => {
  console.log(match.params.nome_visita);

  //Titolo
  //Informativa sulla visita
  //
  return (
    <IonPage>

      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home"/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
              <h2>{match.params.nome_visita}</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h3>Che cos'è</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Descrizione</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h3>Come si svolge</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Descrizione di come si svolge</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default InfoVisita;
