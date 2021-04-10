import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonProgressBar,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import HeaderLogo from "../components/HeaderLogo";
import LinkUtili from "../components/LinkUtili";

import { Plugins } from "@capacitor/core";
import React, { useState } from "react";
import { getByAltText } from "@testing-library/dom";
import { db } from "../components/firebase";

const { Storage } = Plugins;

const Homepage: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  const [numVisite, setNumVisite] = useState(0);

  const data = async () => {
    const ret = await Storage.get({ key: "user" });
    console.log(ret);
  };

  data();

  useIonViewWillEnter(() => {
    db.collection("users")
      .doc("MEGAPRONTONEEEE") //TODO email
      .collection("Salute Personale")
      .get()
      .then((data) => {
        data.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          let item = doc.data();

          let curr = 0;
          if (item.cup_derma == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_odonto == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_glicemia == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_cole == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_cardio == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_oculo == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_spiro == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_feci == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_andro == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_colon == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_gino == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_seno == "Meno di 1 anno fa") {
            curr++;
          }
          if (item.cup_tac == "Meno di 1 anno fa") {
            curr++;
          }
          
          setNumVisite(curr);
          setPercentage(curr / 14);
        });
      });
  });

  return (
    <IonPage>
      <HeaderLogo />

      <IonContent>
        <IonItem lines="none">
        {(percentage*100).toPrecision(2)} %
        
        </IonItem>
        <IonProgressBar buffer={percentage} value={percentage}></IonProgressBar>
        <IonItem lines="none">
          Visite effettuate: {numVisite}
        </IonItem>
        <IonItem lines="none">
          Visite mancanti: {14 - numVisite}
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
