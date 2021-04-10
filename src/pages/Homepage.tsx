import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
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
        });
      });
  });
  return (
    <IonPage>
      <HeaderLogo />
      <IonContent>Homepage</IonContent>
      <IonItem>{percentage}</IonItem>
    </IonPage>
  );
};

export default Homepage;
