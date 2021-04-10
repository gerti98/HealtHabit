import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar , IonListHeader, IonItem, IonAvatar, IonList, IonCheckbox, IonLabel} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart, square, arrowForwardOutline} from 'ionicons/icons'

import HeaderLogo from '../components/HeaderLogo';
import Notifiche from '../components/Notifiche';


import React, { useContext } from "react";
import { AppContext } from "../components/use-reducer-context";
import { State } from "ionicons/dist/types/stencil-public-runtime";
import { useHistory } from 'react-router';
import '../util/global_var';
import  { GlobalVars } from '../util/global_var';

const Profilo: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();
  
  function goToQuestionary(param: number){
    GlobalVars.global_index_quest = param;
    history.push(
      '/home/questionary/${number}',
      {
        index: param
      });
  } 
  
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
            <IonButton slot="end" href="/home/questionary/1">
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>
          </IonItem>
          <IonItem>
            <IonCheckbox checked={true} disabled={true}></IonCheckbox>      
            <IonLabel>Riscio</IonLabel>
            <IonButton slot="end" href="/home/questionary/2">
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>
          </IonItem>
          <IonItem>
            <IonCheckbox checked={true} disabled={true}></IonCheckbox>      
            <IonLabel>Stile Di Vita</IonLabel>
            <IonButton slot="end" href="/home/questionary/3">
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>
          </IonItem>
          <IonItem>
            <IonCheckbox checked={true} disabled={true}></IonCheckbox>      
            <IonLabel>Familiarità</IonLabel>
            <IonButton slot="end" href="/home/questionary/4">
              <IonIcon icon={arrowForwardOutline} slot="end" />
            </IonButton>
          </IonItem>
          <IonItem>
            <IonCheckbox checked={true} disabled={true}></IonCheckbox>      
            <IonLabel>Salute personale</IonLabel>
            <IonButton slot="end" href="/home/questionary/5">
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
