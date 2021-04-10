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
  IonSelect,
  IonSelectOption,
  IonSlide,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { ReactElement, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import { isPropertySignature } from "typescript";
import ExploreContainer from "./ExploreContainer";
import { AppContext } from "./use-reducer-context";
import { db } from "./firebase";
import "./firebase.js";
import "../theme/BasicSlideQuestion.css";

interface obj {
  question: string;
  type: string;
  hook: Function;
  answers: Array<String>;
}

interface type_int {
  type: String;
  hook: Function;
  answers: Array<String>;
}

const regioni = [
  "Sicilia",
  "Piemonte",
  "Marche",
  "Valle d'Aosta",
  "Toscana",
  "Campania",
  "Puglia",
  "Veneto",
  "Lombardia",
  "Emilia-Romagna",
  "Trentino-Alto Adige",
  "Sardegna",
  "Molise",
  "Calabria",
  "Abruzzo",
  "Lazio",
  "Liguria",
  "Friuli-Venezia Giulia",
  "Basilicata",
  "Umbria",
];

const GetQuestionFromType: React.FC<type_int> = ({ type, hook, answers }) => {
  switch (type) {
    case "bool":
      console.log("bool");
      return (
        <IonSegment
          scrollable
          onIonChange={(e) => hook(e.detail.value == "true")}
        >
          <IonSegmentButton value="true">
            <IonLabel>T</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="false">
            <IonLabel>F</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      );
    case "freq":
      return (
        <IonSegment
          scrollable
          onIonChange={(e) => hook(Number(e.detail.value))}
        >
          <IonSegmentButton value="1">
            <IonLabel>1</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2">
            <IonLabel>2</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="3">
            <IonLabel>3</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="4">
            <IonLabel>4</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="5">
            <IonLabel>5</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      );

    case "height":
      return (
        <IonItem>
          <IonInput
            placeholder="Inserisci Altezza"
            onIonChange={(e) => hook(Number(e.detail.value))}
            inputMode="decimal"
            type="number"
          ></IonInput>
        </IonItem>
      );
    case "weight":
      return (
        <IonItem>
          <IonInput
            placeholder="Inserisci Peso"
            onIonChange={(e) => hook(Number(e.detail.value))}
            inputMode="decimal"
            type="number"
          ></IonInput>
        </IonItem>
      );
    case "age":
      return (
        <IonItem>
          <IonInput
            placeholder="Inserisci Età"
            onIonChange={(e) => hook(Number(e.detail.value))}
            inputMode="numeric"
            type="number"
          ></IonInput>
        </IonItem>
      );
    case "combo":
      return (
        <IonItem>
          <IonSelect
            onIonChange={(e) => hook(e.detail.value)}
            interface="popover"
          >
            {answers.map((i) => {
              return <IonSelectOption value={i}>{i}</IonSelectOption>;
            })}
          </IonSelect>
        </IonItem>
      );
    case "sex":
      return (
        <IonSegment scrollable onIonChange={(e) => hook(e.detail.value)}>
          <IonSegmentButton value="M">
            <IonLabel>Maschio</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="F">
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
 *  "combo": Combobox
 *  "sex": double choice
 * */
const BasicSlideQuestion: React.FC<obj> = ({ question, type, hook, answers }) => {
  return (
    <IonSlide>
      <IonGrid>
        <IonRow>
          <IonCol>{question}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="10" offset="2"></IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="10" offset="1">
            <GetQuestionFromType type={type} hook={hook} answers={answers}/>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default BasicSlideQuestion;
