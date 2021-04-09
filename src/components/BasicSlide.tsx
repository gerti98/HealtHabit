import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonSlide,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { isPropertySignature } from "typescript";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../components/use-reducer-context";
import { db } from "./firebase";
import "./firebase.js";

interface obj {
  title: string;
}

function getData{
  db.collection("ingredienti")
    .get()
    .then((querySnapshot) => {
      let temp: any = [];
      querySnapshot.forEach((doc: any) => {
        let item = doc.data();
        temp.push(item.ingrediente);
      });
      setState({ array: temp });
    });
};

const BasicSlide: React.FC<obj> = ({ title }) => {
  return (
    <IonSlide>
      <IonGrid>
        <IonRow>
          <IonCol>{title}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Bella descrizione</IonCol>
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default BasicSlide;
