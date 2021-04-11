import { IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar , IonListHeader, IonItem, IonAvatar, IonList, IonCheckbox, IonLabel, useIonViewWillEnter} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart, square, arrowForwardOutline, text} from 'ionicons/icons'

import HeaderLogo from '../components/HeaderLogo';
import Notifiche from '../components/Notifiche';


import React, { useContext, useState } from "react";
import { AppContext } from "../components/use-reducer-context";
import { db } from '../components/firebase';
import { useHistory } from 'react-router';
import '../util/global_var';
import '../theme/Profilo.css'


interface utente{
  quiz_categorieRischio: boolean,
  quiz_stileDiVita:  boolean,
  quiz_familiarita:boolean,
  quiz_vaccini: boolean,
  quiz_salutePersonale: boolean
  quiz_covid: boolean
}
const Profilo: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [utente, setUtente] = useState({} as utente);

  useIonViewWillEnter(() =>{
    if(sessionStorage.getItem("email") != null){
      db.collection("users").doc(sessionStorage.getItem("email") || "Toscana").get().then((snapshot) =>{
        let item = snapshot.data();
        if(item != undefined){
            let objLink = {
                quiz_categorieRischio: item.quiz_categorieRischio,
                quiz_stileDiVita:  item.quiz_stileDiVita,
                quiz_familiarita: item.quiz_familiarita,
                quiz_vaccini: item.quiz_vaccini,
                quiz_salutePersonale: item.quiz_salutePersonale,
                quiz_covid: item.quiz_covid
            }
            setUtente(objLink);
        }
    })
    }
  
})


  const history = useHistory();
  function returnImg(eta:number, sesso:string){
    if(sesso == "Femmina"){
      return state.eta < 50? "assets/images/woman.png" : "assets/images/old-woman.png"
    }
    else{
      return state.eta < 50? "assets/images/man.png" : "assets/images/old-man.png"
    }
  }
  return (
    <IonPage>
      <HeaderLogo />
      <IonContent >
      <div className="background-green">
        <IonGrid >
          <IonRow className="vertical-align" >
             <IonCol size="4" className="text-center">
             <img src={returnImg(Number(sessionStorage.getItem("eta")) , sessionStorage.getItem("sesso")||"prova")} />
             </IonCol>
             <IonCol size="8">
                <IonRow>
                  <IonCol>
                    <h2 className="whiteLabel">{sessionStorage.getItem("nome")}</h2>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>     
                    <h3 className="mt-0">{sessionStorage.getItem("sesso")}, {Number(sessionStorage.getItem("eta"))} anni</h3>
                  </IonCol>
              </IonRow>
              </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="8" offset="2">
              <IonButton className="button-viola">
                 Modifica impostazioni personali
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      
        <IonList className="mt-3 background-green-list"  >
         <h1 className="text-center whiteLabel">Sondaggi: </h1>

      
          <IonItem key={"categorie a rischio"} lines="none">
              <IonCheckbox checked={ utente.quiz_categorieRischio? true: false} disabled={true} className="checkBox"></IonCheckbox>      
              <IonLabel><h2 className="whiteLabel">Categorie a rischio</h2></IonLabel>
              <IonButton slot="end" href="/questionary/2" className={ utente.quiz_categorieRischio? "bg-viola": "bg-blue-profilo"}>
                { utente.quiz_categorieRischio? "Modifica": "Esegui"}
              </IonButton>
            </IonItem>
 
          <IonItem key={"familiarita"} lines="none">
              <IonCheckbox checked={ utente.quiz_familiarita? true: false} disabled={true}></IonCheckbox>      
              <IonLabel><h2 className="whiteLabel">Familiarità</h2></IonLabel>
              <IonButton slot="end" href="/questionary/4" className={ utente.quiz_familiarita? "bg-viola": "bg-blue-profilo"}>
                { utente.quiz_familiarita? "Modifica": "Esegui"}
              </IonButton>
            </IonItem>
        
          <IonItem lines="none">
              <IonCheckbox checked={ utente.quiz_stileDiVita? true: false} disabled={true}></IonCheckbox>      
              <IonLabel><h2 className="whiteLabel">Stile di vita</h2></IonLabel>
              <IonButton slot="end" href="/questionary/3" className={ utente.quiz_stileDiVita? "bg-viola": "bg-blue-profilo"}>
                  { utente.quiz_stileDiVita? "Modifica": "Esegui"}
              </IonButton>
            </IonItem>
         
            <IonItem lines="none"> 
              <IonCheckbox checked={ utente.quiz_vaccini? true: false} disabled={true}></IonCheckbox>      
              <IonLabel><h2 className="whiteLabel">Vaccini</h2></IonLabel>
              <IonButton slot="end" href="/questionary/5" className={ utente.quiz_vaccini? "bg-viola": "bg-blue-profilo"}>
                  { utente.quiz_vaccini? "Modifica": "Esegui"}
              </IonButton>
            </IonItem>
    
        
            <IonItem lines="none">
              <IonCheckbox checked={ utente.quiz_salutePersonale? true: false} disabled={true}></IonCheckbox>      
              <IonLabel><h2 className="whiteLabel">Salute personale</h2></IonLabel>
              <IonButton slot="end" href="/questionary/6" className={ utente.quiz_salutePersonale? "bg-viola": "bg-blue-profilo"}>
                  { utente.quiz_salutePersonale? "Modifica": "Esegui"}
              </IonButton>
            </IonItem>
            <IonItem lines="none">
              <IonCheckbox checked={ utente.quiz_covid? true: false} disabled={true}></IonCheckbox>      
              <IonLabel><h2 className="whiteLabel">Covid</h2></IonLabel>
              <IonButton slot="end" href="/home/questionary/7" className={ utente.quiz_covid? "bg-viola": "bg-blue-profilo"}>
                  { utente.quiz_covid? "Modifica": "Esegui"}
              </IonButton>
            </IonItem>
  
        </IonList>
        </div>
        {/*
        <IonButton onClick={() => Notifiche.schedule()}>Notifiche</IonButton>
         */}
        
      </IonContent>
    </IonPage>
  );
};

export default Profilo;







  

