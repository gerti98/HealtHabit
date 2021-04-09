import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import BasicSlide from "../components/BasicSlide";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../components/use-reducer-context";

const QuestionaryModel = [["Età"], ["Sesso"]];


const Questionary: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Questionario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides pager={true} className="fullscreen">
          <BasicSlide title={"Domanda 1"} question={"Data di nascita"}  type={"age"}/>
          <BasicSlide title={"Domanda 2"} question={"Sesso"}  type={"sex"} />
          <BasicSlide title={"Domanda 3"} question={"Altezza"}  type={"height"} />
          <BasicSlide title={"Domanda 4"} question={"Peso"}  type={"weight"} />
          <BasicSlide title={"Domanda 5"} question={"Regione"}  type={"region"} />
          <BasicSlide title={"Domanda 6"} question={"Frequenza fumo"}  type={"freq"} />
          <BasicSlide title={"Domanda 7"} question={"Frequenza uso sostanze stupefacenti"}  type={"freq"} />
          <BasicSlide title={"Domanda 8"} question={"Frequenza uso alcolici"}  type={"freq"} />
          <BasicSlide title={"Domanda 9"} question={"Frequenza stile di vita"}  type={"freq"} />
          <BasicSlide title={"Domanda 10"} question={"Diabete in famiglia"}  type={"bool"} />
          <BasicSlide title={"Domanda 11"} question={"Tumori in famiglia"}  type={"bool"} />
          <BasicSlide title={"Domanda 12"} question={"Sei celiaco/a"} type={"bool"} />
          <BasicSlide title={"Domanda 13"} question={"Sei mai stato in gravidanza"} type={"bool"} />
          <BasicSlide title={"Domanda 14"} question={"Hai mai usato la pillola"} type={"bool"} />
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Questionary;
