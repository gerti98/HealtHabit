import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar, iosTransitionAnimation, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {heart, documentTextOutline, bookOutline, receiptOutline,eyedrop} from 'ionicons/icons'

import "../theme/LinkUtili.css"
import { useContext, useEffect, useState } from 'react';
import { db } from './firebase';
import {Plugins} from '@capacitor/core';
import { AppContext } from './use-reducer-context';

const { Browser } = Plugins;


interface objLink{
    fascicolo: string,
    prenotazioni: string,
    ricetta: string,
    vaccino: string
}
const LinkUtili: React.FC = () => {

    const {state, dispatch} = useContext(AppContext)
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
        <IonGrid className="background-green" >
            <IonRow>
                <IonCol >
                    <h1 className="text-center">Link utili {state.regione}</h1>
                </IonCol>
            </IonRow>
            <IonRow className="vertical-align" onClick = {() => openLink(link.fascicolo)}>
                <IonCol size="4" offset="1">
                    <img className="img_rounded" src="assets/images/FS.png"/>
                </IonCol>
                <IonCol size="6">
                    <h2>Fascicolo elettronico</h2> 
                </IonCol>
            </IonRow>
            <IonRow  className="vertical-align" onClick = {() => openLink(link.prenotazioni)}>
            <IonCol size="4" offset="1">
                    <img className="img_rounded" src="assets/images/prenotazione.png"/>
                </IonCol>
                <IonCol size="6">
                    <h2>Modifica o sposta una visita</h2>
                </IonCol>
            </IonRow>
            <IonRow className="vertical-align" onClick = {() => openLink(link.ricetta)}>
                <IonCol size="4" offset="1">
                    <img className="img_rounded" src="assets/images/ricetta.jpg"/>
                </IonCol>
                <IonCol size="6">
                    <h3>Prenota una visita con la ricetta elettronica</h3>
                </IonCol>
            </IonRow>
            <IonRow  className="vertical-align" onClick = {() => openLink(link.vaccino)}>
            <IonCol size="4" offset="1">
                    <img className="img_rounded" src="assets/images/vaccino.png"/>
                </IonCol>
                <IonCol size="6">
                    <h2>Prenotazione vaccino</h2>
                </IonCol>
            </IonRow>
            
        </IonGrid>
            
    );
};

export default LinkUtili;
