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
  useIonViewWillEnter,
} from "@ionic/react";
import { notifications } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import HeaderLogo from "../components/HeaderLogo";
import ListaVisite from "../components/ListaVisite";
import Notifiche from "../components/Notifiche";
import { db } from '../components/firebase';
import "../theme/InfoVisita.css"
interface IndexProps
  extends RouteComponentProps<{
    nome_visita: string;
  }> {}

const InfoVisita: React.FC<IndexProps> = ({ match }) => {
  const [desc, setDesc] = useState("");
  const [how, setHow] =useState("")

  useIonViewWillEnter(() =>{
    db.collection("info_visite").doc("Colonscopia").get().then((snapshot) =>{
        let item = snapshot.data();
        if(item != undefined){
            setDesc(item.desc);
            setHow(item.how);
        }
    })
})

  //Titolo
  //Informativa sulla visita
  //
  return (
    <IonPage>

      <IonContent>
        <IonHeader>
          <IonToolbar className="whiteHeader">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home/fascicolo"/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol >
              <h2 className="text-center">{match.params.nome_visita}</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="no-padding">
              <h3 className="blue_text margin-1 ">Che cos'è</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="background-green-item">{desc}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="no-padding">
              <h3 className="blue_text margin-1">Come si svolge</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="background-green-item">{how}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default InfoVisita;
