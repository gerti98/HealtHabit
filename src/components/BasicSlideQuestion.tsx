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
import React, { ReactElement, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import { isPropertySignature } from "typescript";
import ExploreContainer from "./ExploreContainer";
import { AppContext } from "./use-reducer-context";
import { db } from "./firebase";
import "./firebase.js";

interface obj {
  title: string;
  question: string;
  type: string;
  hook: Function;
}

interface type_int {
  type: String;
  hook: Function;
}

const GetQuestionFromType: React.FC<type_int> = ({ type, hook }) => {
  switch (type) {
    case "bool":
      console.log("bool");
      return (
        <IonSegment scrollable onIonChange={(e) => hook((e.detail.value) == "true")}>
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
        <IonSegment scrollable onIonChange={(e) => hook(Number(e.detail.value))}>
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
          ></IonInput>
        </IonItem>
      );
    case "region":
      return (
        <IonItem>
          <IonInput
            placeholder="Inserisci Regione"
            onIonChange={(e) => hook(e.detail.value)}
            inputMode="text"
          ></IonInput>
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
 *  "region": Choicebox
 *  "sex": double choice
 * */
const BasicSlideQuestion: React.FC<obj> = ({ title, question, type, hook}) => {
  
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
          <GetQuestionFromType type={type} hook={hook} />
        </IonRow>
      </IonGrid>
    </IonSlide>
  );
};

export default BasicSlideQuestion;
