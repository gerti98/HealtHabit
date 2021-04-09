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
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { isPropertySignature } from "typescript";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../components/use-reducer-context";
import { db } from "./firebase";
import "./firebase.js";

interface obj {
  title: string;
}

var docRef = db.collection("prova").doc("1");

const prova = "Ciao";



const BasicSlide: React.FC<obj> = ({ title }) => {
  const [dato, setDato] = useState();
  /*
  const getData = docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        if (doc.data() == null) {
          return;
        } else {
          setDato(doc.data()?.nome);
          return;
        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return;
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  */

    
  return (
    <IonSlide>
      <IonGrid>
        <IonRow>
          <IonCol>{title}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>{dato}</IonCol>
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default BasicSlide;
