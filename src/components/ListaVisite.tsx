import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart, documentTextOutline, bookOutline, receiptOutline,eyedrop} from 'ionicons/icons'

import "../theme/LinkUtili.css"
import { useEffect, useState } from 'react';
import { db } from './firebase';
import {Plugins} from '@capacitor/core';



interface objVisita{
    Data: Date,
    Nome: string,
    Tipologia: string,
    Luogo: string,
    Prenotata: boolean,
    Eseguita: boolean
}

const ListaVisite: React.FC = () => {
    const [visiteFatte, setVisiteFatte] = useState([{} as objVisita]);
    const [visiteNonFatte, setVisiteNonFatte] = useState([{} as objVisita]);
    const [visitePrenotate, setVisitePrenotate] = useState([{} as objVisita]);
    const [visiteNonPrenotate, setVisiteNonPrenotate] = useState([{} as objVisita]);
    useEffect(() =>{
        console.log(visiteFatte);
    })
    useIonViewWillEnter(() =>{
        db.collection("visite").doc("Giovanni").collection("visite").orderBy('Data', "asc").get().then((snapshot) =>{
            let temp_fatte: any = []
            let temp_nonFatte: any =[]
            let temp_nonPrenotate: any =[]
            let temp_Prenotate: any =[]

            snapshot.forEach((doc : any) =>{
                let item = doc.data();
                let timestamp = Date.now()

                if(item.Prenotata == false && item.eseguita == false){
                    temp_nonPrenotate.push(item);
                }
                else if(item.Prenotata == true && item.eseguita == true){
                    temp_fatte.push(item);
                }
                else if (item.Prenotata == true && item.eseguita == false){ 
                    if(item.Data > timestamp){
                        temp_Prenotate.push(item);
                    }
                    else{
                        temp_nonFatte.push(item);
                    }
                }
                
            })
            setVisiteFatte(temp_fatte)
            setVisiteNonFatte(temp_nonFatte)
            setVisiteNonPrenotate(temp_nonPrenotate)
            setVisitePrenotate(temp_Prenotate)
        })
    })
    
    return (
        <div>
           <IonList>
               <IonListHeader>
                   Da prenotare
               </IonListHeader>
               {visiteNonPrenotate.map((item:objVisita) =>{
                   return(
                    <IonItem key={item.Luogo + item.Data + item.Nome}>
                    <IonAvatar slot="start">
                    <img src="../theme/img/consultation.png"/>
                    </IonAvatar>
                    <IonLabel>
                      <h2>{item.Nome}</h2>
                      <h3>{item.Prenotata}</h3>
                   <p>Luogo: {item.Luogo} - Data: {item.Data}</p>
                    </IonLabel>
                  </IonItem>
                   )
               })}
           </IonList>

           <IonList>
               <IonListHeader>
                   Prenotate
               </IonListHeader>
               {visitePrenotate.map((item:objVisita) =>{
                   return(
                    <IonItem key={item.Luogo + item.Data + item.Nome}>
                    <IonAvatar slot="start">
                    <img src="../theme/img/consultation.png"/>
                    </IonAvatar>
                    <IonLabel>
                      <h2>{item.Nome}</h2>
                      <h3>{item.Prenotata}</h3>
                   <p>Luogo: {item.Luogo} - Data: {item.Data}</p>
                    </IonLabel>
                  </IonItem>
                   )
               })}
           </IonList>

           <IonList>
               <IonListHeader>
                   Non eseguite
               </IonListHeader>
               {visiteNonFatte.map((item:objVisita) =>{
                   return(
                    <IonItem key={item.Luogo + item.Data + item.Nome}>
                    <IonAvatar slot="start">
                      <img src="../theme/img/consultation.png"/>
                    </IonAvatar>
                    <IonLabel>
                      <h2>{item.Nome}</h2>
                      <h3>{item.Prenotata}</h3>
                   <p>Luogo: {item.Luogo} - Data: {item.Data}</p>
                    </IonLabel>
                  </IonItem>
                   )
               })}
           </IonList>

           <IonList>
               <IonListHeader>
                   Eseguite
               </IonListHeader>
               {visiteFatte.map((item:objVisita) =>{
                   return(
                    <IonItem key={item.Luogo + item.Data + item.Nome}>
                    <IonAvatar slot="start">
                    <img src="../theme/img/consultation.png"/>
                    </IonAvatar>
                    <IonLabel>
                      <h2>{item.Nome}</h2>
                      <h3>{item.Prenotata}</h3>
                   <p>Luogo: {item.Luogo} - Data: {item.Data}</p>
                    </IonLabel>
                  </IonItem>
                   )
               })}
           </IonList>


        </div>
    );
};

export default ListaVisite;
