import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
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
      <IonProgressBar buffer={percentage} value={percentage}></IonProgressBar>
        
        <h1 style={{ textAlign: "center" }}>
          Status: {(percentage * 100).toPrecision(2)}%
        </h1>

        <IonItemDivider color="primary">
          <IonLabel style={{color: "white"}}>Statistiche visite</IonLabel>
        </IonItemDivider>
        <IonList lines="full">
          <IonItem>Visite effettuate: {numVisite}</IonItem>
          <IonItem>Visite mancanti: {14 - numVisite}</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
