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
  
  
  const BasicSlide: React.FC<obj> = ({title}) => {
    
    return (
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>{title}</IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
    );
  };
  
  export default BasicSlide;
  