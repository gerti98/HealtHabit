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
        <IonGrid >
            <IonRow onClick = {() => openLink(link.fascicolo)}>
                <IonCol size="4">
                    <IonIcon icon={documentTextOutline}/>
                </IonCol>
                <IonCol size="8">
                    Link 
                </IonCol>
            </IonRow>
            <IonRow onClick = {() => openLink(link.prenotazioni)}>
                <IonCol size="4">
                    <IonIcon icon={bookOutline}/>
                </IonCol>
                <IonCol size="8">
                    Link per prenotare una visita
                </IonCol>
            </IonRow>
            <IonRow onClick = {() => openLink(link.ricetta)}>
                <IonCol size="4">
                    <IonIcon icon={receiptOutline}/>
                </IonCol>
                <IonCol size="8">
                    Link per consultare le ricette online
                </IonCol>
            </IonRow>
            <IonRow onClick = {() => openLink(link.vaccino)}>
                <IonCol size="4">
                    <IonIcon icon={eyedrop}/>
                </IonCol>
                <IonCol size="8">
                    Link per prenotare un vaccino
                </IonCol>
            </IonRow>
            
        </IonGrid>
            
    );
};

export default LinkUtili;
