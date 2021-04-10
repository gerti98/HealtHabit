import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import ExploreContainer from "../components/ExploreContainer";
  import HeaderLogo from "../components/HeaderLogo";
  import LinkUtili from "../components/LinkUtili";
  
  import { Plugins } from "@capacitor/core";
  import React from "react";
  const { Storage } = Plugins;
  
  const Link: React.FC = () => { 
    const data = async () => {
      const ret = await Storage.get({ key: "user" });
      console.log(ret);
    };
  
    data();
  
    return (
      <IonPage>
        <HeaderLogo />
        <LinkUtili />
        <IonContent>Homepage</IonContent>
        <IonButton
          onClick={() => {
            Storage.clear();
            console.log("Svuotato local storage");
          }}
        >
          SVUOTA LOCAL STORAGE
        </IonButton>
      </IonPage>
    );
  };
  
  export default Link;
  