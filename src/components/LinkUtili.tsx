import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart, documentTextOutline, bookOutline, receiptOutline,eyedrop} from 'ionicons/icons'

import "../theme/LinkUtili.css"
import { useEffect, useState } from 'react';
import { db } from './firebase';
import {Plugins} from '@capacitor/core';

const { Browser } = Plugins;


interface objLink{
    fascicolo: string,
    prenotazioni: string,
    ricetta: string,
    vaccino: string
}
const LinkUtili: React.FC = () => {
    const [link, setlink] = useState({} as objLink);
    useEffect(() =>{
        console.log(link);
    })
    useIonViewWillEnter(() =>{
        db.collection("linkUtili").doc("Toscana").get().then((snapshot) =>{
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
    })

    async function openLink(linkPass: string){
        await Browser.open({ url: linkPass });
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="3">
                    <IonButton expand="full" color="primary" onClick = {() => openLink(link.fascicolo)} > <IonIcon icon={documentTextOutline}/></IonButton>
                </IonCol>
                <IonCol size="3">
                    <IonButton expand="full" color="primary" onClick = {() => openLink(link.prenotazioni)}> <IonIcon icon={bookOutline}/></IonButton>
                </IonCol>
                    <IonCol size="3">
                <IonButton expand="full" color="primary" onClick = {() => openLink(link.ricetta)}> <IonIcon icon={receiptOutline}/></IonButton>
                </IonCol>
                <IonCol size="3">
                    <IonButton expand="full" color="primary " onClick = {() => openLink(link.vaccino)}> <IonIcon icon={eyedrop}/></IonButton>
                </IonCol>

            </IonRow>
        </IonGrid>
            
    );
};

export default LinkUtili;
