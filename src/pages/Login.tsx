import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import GoogleBtn from "../components/GoogleBtn";
import { AppContext, userInterface } from "../components/use-reducer-context";
import "../theme/Login.css";
import firebase from "firebase";





const Login: React.FC = () => {

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides pager={true} className="fullscreen">
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol>Pagina 1</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Bella descrizione</IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol>Domandona</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Domandina</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
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
                  </IonSegment>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <IonTitle>Pagina 3</IonTitle>
          </IonSlide>
          <IonSlide>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Blank</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <GoogleBtn />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Login;


