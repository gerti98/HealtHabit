import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar , IonListHeader, IonItem, IonAvatar, IonList, IonCheckbox, IonLabel} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart, square, arrowForwardOutline} from 'ionicons/icons'

import HeaderLogo from '../components/HeaderLogo';
import Notifiche from '../components/Notifiche';


import React, { useContext } from "react";
import { AppContext } from "../components/use-reducer-context";
import { State } from "ionicons/dist/types/stencil-public-runtime";

const Profilo: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);

  return (
    <IonPage>
      <HeaderLogo />
      <IonContent>
        Tab 1
        <IonItem>
          <IonAvatar slot="start">
            <img src={state.img} />
          </IonAvatar>
          {state.nome}
        </IonItem>
        <IonList>
          <IonListHeader>Sondaggi:</IonListHeader>
      
          <IonItem>
            <IonCheckbox checked={true} disabled={true}></IonCheckbox>      
            <IonLabel>Generale</IonLabel>
            <IonButton slot="end" href="/home/questionary">
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>
          </IonItem>
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