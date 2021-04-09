import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSlide,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { ReactElement, useContext, useState } from "react";
import { useHistory } from "react-router";
import { isPropertySignature } from "typescript";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../components/use-reducer-context";
import { db } from "./firebase";
import "./firebase.js";

interface obj {
  title: string;
  question: string;
  type: string;
}

interface type_int {
  type: String;
}

const GetQuestionFromType: React.FC<type_int> = ({ type }) => {
  switch (type) {
    case "bool":
      console.log("bool");
      return (
        <IonSegment scrollable>
          <IonSegmentButton>
            <IonLabel>T</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton>
            <IonLabel>F</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      );
    case "freq":
      return (
        <IonSegment scrollable>
          <IonSegmentButton>
            <IonLabel>1</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton>
            <IonLabel>2</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton>
            <IonLabel>3</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton>
            <IonLabel>4</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton>
            <IonLabel>5</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      );

    case "height":
      return (
        <IonItem>
          <IonInput
            placeholder="Inserisci Altezza"
            onIonChange={() => console.log("Modificata altezza")}
            inputMode="decimal"
          ></IonInput>
        </IonItem>
      );
    case "weight":
      return (
        <IonItem>
          <IonInput
            placeholder="Inserisci Peso"
            onIonChange={() => console.log("Modificato Peso")}
            inputMode="decimal"
          ></IonInput>
        </IonItem>
      );
    case "age":
      return (
        <IonItem>
          <IonInput
            placeholder="Inserisci Età"
            onIonChange={() => console.log("Modificata altezza")}
            inputMode="numeric"
          ></IonInput>
        </IonItem>
      );
    case "region":
      return (
        <IonItem>
          <IonInput
            placeholder="Inserisci Regione"
            onIonChange={() => console.log("Modificata altezza")}
            inputMode="text"
          ></IonInput>
        </IonItem>
      );
    case "sex":
      return (
        <IonSegment scrollable>
          <IonSegmentButton>
            <IonLabel>Maschio</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton>
            <IonLabel>Femmina</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      );
  }

  return <div></div>;
};

/**
 * Type:
 *  "bool": Boolean
 *  "freq": 1 to 5
 *  "height": input height
 *  "weight": input weight
 *  "age": Input age
 *  "region": Choicebox
 *  "sex": double choice
 * */
const BasicSlide: React.FC<obj> = ({ title, question, type }) => {
  const [dato, setDato] = useState();

  return (
    <IonSlide>
      <IonGrid>
        <IonRow>
          <IonCol>{title}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>{question}</IonCol>
        </IonRow>
        <IonRow>
          <GetQuestionFromType type={type} />
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default BasicSlide;
