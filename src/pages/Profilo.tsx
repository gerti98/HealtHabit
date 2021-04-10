import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar , IonListHeader, IonItem, IonAvatar, IonList, IonCheckbox, IonLabel, useIonViewWillEnter} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart, square, arrowForwardOutline} from 'ionicons/icons'

import HeaderLogo from '../components/HeaderLogo';
import Notifiche from '../components/Notifiche';


import React, { useContext, useState } from "react";
import { AppContext } from "../components/use-reducer-context";
import { State } from "ionicons/dist/types/stencil-public-runtime";
import { db } from '../components/firebase';

interface utente{
  sesso: string,
  eta: number,
  quiz_categorieRischio: boolean,
  quiz_stileDiVita:  boolean,
  quiz_familiarita:boolean,
  quiz_vaccini: boolean,
  quiz_salutePersonale: boolean
}
const Profilo: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [utente, setUtente] = useState({} as utente);

  useIonViewWillEnter(() =>{
    db.collection("users").doc(state.email).get().then((snapshot) =>{
        let item = snapshot.data();
        if(item != undefined){
            let objLink = {
                sesso: item.sesso,
                eta: item.eta,
                quiz_categorieRischio: item.quiz_categorieRischio,
                quiz_stileDiVita:  item.quiz_stileDiVita,
                quiz_familiarita: item.quiz_familiarita,
                quiz_vaccini: item.quiz_vaccini,
                quiz_salutePersonale: item.quiz_salutePersonale
            }
            setUtente(objLink);
        }
    })
})


  return (
    <IonPage>
      <HeaderLogo />
      <IonContent>
        
        <IonItem>
          <IonAvatar slot="start">
            <img src={state.img} />
          </IonAvatar>
          <h2>{state.nome}</h2>
          <h3>{utente.sesso}, {utente.eta} anni</h3>
        </IonItem>
        <IonList>
          <IonListHeader>Sondaggi:</IonListHeader>

         { utente.quiz_categorieRischio && ( <IonItem>
            <IonCheckbox checked={true} disabled={true}></IonCheckbox>      
            <IonLabel>Generale</IonLabel>
            <IonButton slot="end" href="/home/questionary">
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>
          </IonItem>)}
          
        </IonList>


        <IonButton href="login">APRI LOGIN PAGE</IonButton>
        {/*
        <IonButton onClick={() => Notifiche.schedule()}>Notifiche</IonButton>
         */}
      </IonContent>
    </IonPage>
  );
};

export default Profilo;
