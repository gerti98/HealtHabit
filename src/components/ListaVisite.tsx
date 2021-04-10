import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import {
  heart,
  documentTextOutline,
  bookOutline,
  receiptOutline,
  eyedrop,
} from "ionicons/icons";

import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { Plugins } from "@capacitor/core";
import "../theme/ListaVisite.css";

interface objVisita {
  Data: Date;
  Nome: string;
  Tipologia: string;
  Luogo: string;
  Prenotata: boolean;
  Eseguita: boolean;
}

const ListaVisite: React.FC = () => {
  const [visiteFatte, setVisiteFatte] = useState([]);
  const [visiteNonFatte, setVisiteNonFatte] = useState([{} as objVisita]);
  const [visitePrenotate, setVisitePrenotate] = useState([{} as objVisita]);
  const [visiteNonPrenotate, setVisiteNonPrenotate] = useState([
    {} as objVisita,
  ]);

  useIonViewWillEnter(() => {
    db.collection("visite")
      .doc("Giovanni")
      .collection("visite")
      .orderBy("Data", "asc")
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        let temp_fatte: any = [];
        let temp_nonFatte: any = [];
        let temp_nonPrenotate: any = [];
        let temp_Prenotate: any = [];

        snapshot.forEach((doc: any) => {
          console.log(doc);
          let item = doc.data();
          let timestamp = Date.now();

          if (item.Prenotata == false && item.Eseguita == false) {
            temp_nonPrenotate.push(item);
          } else if (item.Prenotata == true && item.Eseguita == true) {
            temp_fatte.push(item);
          } else if (item.Prenotata == true && item.Eseguita == false) {
            if (item.Data > timestamp) {
              temp_Prenotate.push(item);
            } else {
              temp_nonFatte.push(item);
            }
          }
        });
        setVisiteFatte(temp_fatte);
        setVisiteNonFatte(temp_nonFatte);
        setVisiteNonPrenotate(temp_nonPrenotate);
        setVisitePrenotate(temp_Prenotate);
      });
  });

  return (
    <div>
      
        <IonList>
          <IonListHeader>
            <h3 className="blue_text">Da prenotare</h3>
          </IonListHeader>
          {visiteNonPrenotate.map((item: objVisita) => {
            return (
            <IonItemSliding>
              <IonItem
                lines="none"
                className="background-green-item"
                key={item.Luogo + item.Data + item.Nome}
                href={"/home/info_visita/" + item.Nome}
              >
                <IonAvatar slot="start">
                  <img
                    className="no-radius"
                    src={"assets/images/" + item.Tipologia + ".png"}
                  />
                </IonAvatar>
                <IonLabel>
                  <h2 className="white_text">{item.Nome}</h2>
                  <h3>{item.Prenotata}</h3>
                  <h4 className="white_text">
                    Luogo: {item.Luogo} - Data: {item.Data}
                  </h4>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
          <IonItemOption
            color="danger"
            className="IonItemsPrincipalOptionFirst"
            onClick={() => alert("pressed non mi piace")}
          >
            Segnala
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

            );
          })}
        </IonList>
     
      <IonList>
        <IonListHeader>
          <h3 className="blue_text">Prenotate</h3>
        </IonListHeader>
        {visitePrenotate.map((item: objVisita) => {
          return (
            <IonItem lines="none" key={item.Luogo + item.Data + item.Nome}>
              <IonAvatar slot="start">
                <img
                  className="no-radius"
                  src={"assets/images/" + item.Tipologia + ".png"}
                />
              </IonAvatar>
              <IonLabel>
                <h2 className="white_text">{item.Nome}</h2>
                <h3>{item.Prenotata}</h3>
                <h4 className="white_text">
                  Luogo: {item.Luogo} - Data: {item.Data}
                </h4>
              </IonLabel>
            </IonItem>
          );
        })}
      </IonList>

      <IonList>
        <IonListHeader>
          <h3 className="blue_text">Non eseguite</h3>
        </IonListHeader>
        {visiteNonFatte.map((item: objVisita) => {
          return (
            <IonItem lines="none" key={item.Luogo + item.Data + item.Nome}>
              <IonAvatar slot="start">
                <img
                  className="no-radius"
                  src={"assets/images/" + item.Tipologia + ".png"}
                />
              </IonAvatar>
              <IonLabel>
                <h2 className="white_text">{item.Nome}</h2>
                <h3>{item.Prenotata}</h3>
                <h4 className="white_text">
                  Luogo: {item.Luogo} - Data: {item.Data}
                </h4>
              </IonLabel>
            </IonItem>
          );
        })}
      </IonList>

      <IonList>
        <IonListHeader>
          <h3 className="blue_text">Eseguite</h3>
        </IonListHeader>
        {visiteFatte.map((item: objVisita) => {
          return (
            <IonItem lines="none" key={item.Luogo + item.Data + item.Nome}>
              <IonAvatar slot="start">
                <img
                  className="no-radius"
                  src={"assets/images/" + item.Tipologia + ".png"}
                />
              </IonAvatar>
              <IonLabel>
                <h2 className="white_text">{item.Nome}</h2>
                <h3>{item.Prenotata}</h3>
                <h4 className="white_text">
                  Luogo: {item.Luogo} - Data: {item.Data}
                </h4>
              </IonLabel>
            </IonItem>
          );
        })}
      </IonList>
    </div>
  );
};

export default ListaVisite;
