import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
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
      <IonContent fullscreen>
        <IonSlides pager={true} className="fullscreen">
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol>
                   <IonImg src="assets/images/Heroes-01.png"/>
                </IonCol>
              </IonRow>
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
                <IonCol>
                   <IonImg src="assets/images/Fever-01.png"/>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Domandona</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Domandina</IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
          <IonGrid>
            <IonRow>
                <IonCol>
                   <IonImg src="assets/images/Covid virus-01.png"/>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Domandona</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Domandina</IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonImg src="assets/images/Work at home-01.png"/>
                </IonCol>
              </IonRow>
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


