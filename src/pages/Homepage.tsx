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
import React, { useEffect, useState } from "react";
import { getByAltText } from "@testing-library/dom";
import { db } from "../components/firebase";
import "../theme/Homepage.css"

const { Browser } = Plugins;
const { Storage } = Plugins;
interface objLink{
  fascicolo: string,
  prenotazioni: string,
  ricetta: string,
  vaccino: string
}

const Homepage: React.FC = () => {
  const [percentage, setPercentage] = useState(3/5);
  const [numVisite, setNumVisite] = useState(0);

  const [link, setlink] = useState({} as objLink);
  useEffect(() =>{

      console.log(link);
  })
  const data = async () => {
    const ret = await Storage.get({ key: "user" });
    console.log(ret);
  };

  data();
 

    async function openLink(linkPass: string){
        await Browser.open({ url: linkPass });
    }

  useIonViewWillEnter(() => {
    db.collection("linkUtili").doc(sessionStorage.getItem("regione") || "Toscana").get().then((snapshot) =>{
      let item = snapshot.data();
      if(item != undefined){
          let objLink = {
              fascicolo: item.Fascicolo,
              prenotazioni: item.GestionePrenotazioni,
              ricetta: item.PrenotaConRicetta,
              vaccino: item.PrenotazioneVaccino
          }
          setlink(objLink);
      }
  })

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

        <IonGrid>
          <IonRow className="background-viola ion-margin-top ">
            <IonCol size="12" >
                <IonRow className="ion-align-items-center">
                    <IonCol size="2">
                      <img src="assets/images/coronavirus.png"/>
                    </IonCol>
                    <IonCol size="7" className="ion-no-padding">
                      <h4 style={{color:"white"}} className="ion-no-margin">Vaccino COVID</h4>
                      <h6 style={{color:"white"}}  className="ion-no-margin">La tua regione ha deciso che ne hai diritto!</h6>
                    </IonCol> 
                    <IonCol size="3" className="ion-no-padding ml-2">
                      <IonButton className="style-button" onClick = {() => openLink(link.vaccino)}>Prenota Ora</IonButton>
                    </IonCol> 
                </IonRow>
            </IonCol>
          </IonRow>

          <IonRow className="background-blue mt-5">
            <IonCol size="12" >
                <IonRow className="ion-align-items-center">
                  <IonCol>
                  <h2 style={{color:"white"}} className="ion-text-center" >Esami di routine 2021</h2>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                  <IonCol size="8" offset="2">
                    <h4 className="ion-text-center" style={{color:"white"}}>Visite sostenute</h4>
                    <h3 className="ion-text-center"> 3 / 5 </h3>
                    <IonProgressBar buffer={percentage} value={percentage} color="warning"></IonProgressBar>
                   
                  </IonCol>
                </IonRow>
                <IonRow className="ion-align-items-center">
                  <IonCol size="12">
                    <h5 className="ion-text-center" style={{color:"white"}} > Complimenti! ti mancano solo 2 esami:</h5>
                    <IonRow className="ion-align-items-center ion-justify-content-center">
                      <IonCol size="auto">
                          <h4 style={{color:"white"}} >• Elettrocardiogramma</h4>
                      </IonCol>
                      <IonCol size="3">
                        <IonButton className="style-button-bg-blue" onClick={() => {openLink("https://www.miodottore.it/cerca?q=elettrocardiogramma&loc=Roma&filters%5Bservices%5D%5B%5D=673")}}>Prenota Ora</IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-align-items-center ion-justify-content-center">
                      <IonCol size="auto" >
                          <h4 style={{color:"white"}} className="ion-text-center" > • Pap-Test</h4>
                      </IonCol>
                      <IonCol size="3">
                        <IonButton className="style-button-bg-blue"  onClick={() =>{ openLink("https://www.miodottore.it/cerca?q=pap%20test&loc=Roma&filters%5Bservices%5D%5B%5D=627")}}>Prenota Ora</IonButton>
                      </IonCol>
                    </IonRow>

                    <IonRow className="ion-align-items-center">
                      <IonCol size="8" offset="2">
                          <IonButton expand="block" className="btn-background-viola" href="/home/fascicolo" >Vedi esami già eseguiti</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <IonItem lines="none">
        {(percentage*100).toPrecision(2)} %
        
        </IonItem>
        
        <IonItem lines="none">
          Visite effettuate: {numVisite}
        </IonItem>
        <IonItem lines="none">
          Visite mancanti: {14 - numVisite}
        </IonItem> */}
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
