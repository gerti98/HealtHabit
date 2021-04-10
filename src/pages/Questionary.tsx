import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import React, { useCallback, useContext, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router";
import BasicSlideQuestion from "../components/BasicSlideQuestion";
import BasicSlide from "../components/BasicSlideQuestion";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../components/use-reducer-context";
import "../components/firebase.js";
import { db } from "../components/firebase.js";
import "../util/global_var";

interface IndexProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Questionary: React.FC<IndexProps> = ({ match }) => {
  const [showToast1, setShowToast1] = useState(false);

  //Identificazione
  const [eta, setEta] = useState();
  const [sex, setSex] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [region, setRegion] = useState();
  const [tipoPelle, setTipoPelle] = useState();
  const [istruzione, setIstruzione] = useState();

  function sendDataToFirebase(index: number) {
    var nameQuestionario = [
      "",
      "Identificativo",
      "Categorie a rischio",
      "Stile di Vita",
      "Familiarita",
      "Vaccini",
      "Salute Personale",
    ];

    var bigData = [
      {},
      {
        eta: eta,
        sesso: sex,
        altezza: height,
        peso: weight,
        regione: region,
        pelle: tipoPelle,
        istruzione: istruzione,
      },
      {
        diabete: diabete,
        cardiopatia: cardiopatia,
        ipertensione: ipertensione,
      },
      {
        attivita_lavoro: stileVitaWork,
        attivita_tl: stileVita,
        fumo: fumo,
        alcol: alcol,
        sostanze: droga,
        dieta: dieta,
      },
      {
        fam_onco: familyOncologiche,
        fam_meta: familyMetaboliche,
        fam_cardio: familyCardiovascolari,
        fam_resp: familyRespiratorie,
        fam_onco_gino: familyOncoGinecologiche,
        fam_onco_andro: familyOncoAndrologiche,
      },
      {
        vacc_pnmccc: vaccinePreumococcica,
        vacc_zoster: vaccinePreumococcica,
        vacc_influ: vaccineInfluenzale,
      },
      {
        cup_derma: lastCheckUpDermatologico,
        cup_sangue: lastEsameEmocromocitometrico,
        cup_odonto: lastCheckUpOdontoiatrico,
        cup_glicemia: lastDosaggioGlicemico,
        cup_cole: lastDosaggioColesterolo,
        cup_cardio: lastCheckUpCardiologico,
        cup_oculo: lastCheckUpOculistico,
        cup_spiro: lastSpirometria,
        cup_feci: lastEsameFeci,
        cup_andro: lastCheckUpAndrologico,
        cup_colon: lastPancolonscopia,
        cup_gino: lastCheckUpGinecologico,
        cup_seno: lastCheckUpSenologico,
        cup_tac: lastTac,
      },
    ];

    console.log(bigData[index]);

    if (index == 1) {
      db.collection("users")
        .doc("MEGAPRONTONEEEE") //TODO: add email
        .set(bigData[index])
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } else {
      db.collection("users")
        .doc("MEGAPRONTONEEEE2")
        .collection(nameQuestionario[index])
        .doc() //TODO: add email
        .set(bigData[index])
        .then(() => {
          console.log("Document successfully written!");
          setShowToast1(true);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  }

  //Categorie a rischio
  const [diabete, setDiabete] = useState();
  //const [diagnosiDiabete, setDiagnosiDiabete] = useState();
  const [cardiopatia, setCardiopatia] = useState();
  const [ipertensione, setIpertensione] = useState();

  //Stile di vita
  const [stileVita, setStileVita] = useState();
  const [stileVitaWork, setStileVitaWork] = useState();
  const [fumo, setFumo] = useState();
  const [droga, setDroga] = useState();
  const [alcol, setAlcol] = useState();
  const [dieta, setDieta] = useState();

  //Familiarità
  const [familyOncologiche, setFamilyOncologiche] = useState();
  const [familyMetaboliche, setFamilyMetaboliche] = useState();
  const [familyCardiovascolari, setFamilyCardiovascolari] = useState();
  const [familyRespiratorie, setFamilyRespiratorie] = useState();
  const [familyOncoGinecologiche, setFamilyOncoGinecologiche] = useState();
  const [familyOncoAndrologiche, setFamilyOncoAndrologiche] = useState();

  //Vaccini
  const [vaccinePreumococcica, setVaccinePneumococcica] = useState();
  const [vaccineZoster, setVaccineZoster] = useState();
  const [vaccineInfluenzale, setVaccineInfluenzale] = useState();

  //Salute Personale
  const [lastCheckUpDermatologico, setLastCheckUpDermatologico] = useState();
  const [
    lastEsameEmocromocitometrico,
    setLastEsameEmocromocitometrico,
  ] = useState();
  const [lastCheckUpOdontoiatrico, setLastCheckUpOdontoiatrico] = useState();
  const [lastDosaggioGlicemico, setLastDosaggioGlicemico] = useState();
  const [lastDosaggioColesterolo, setLastDosaggioColesterolo] = useState();
  const [lastCheckUpCardiologico, setLastCheckUpCardiologico] = useState();
  const [lastCheckUpOculistico, setLastCheckUpOculistico] = useState();
  const [lastSpirometria, setLastSpirometria] = useState();
  const [lastEsameFeci, setLastEsameFeci] = useState();
  const [lastCheckUpAndrologico, setLastCheckUpAndrologico] = useState();
  const [lastCheckUpGinecologico, setLastCheckUpGinecologico] = useState();
  const [lastCheckUpSenologico, setLastCheckUpSenologico] = useState();
  const [lastPancolonscopia, setLastPancolonscopia] = useState();
  const [lastTac, setLastTac] = useState();

  const array_questions = [
    [],
    [
      ["Età", "age", setEta, null],
      ["Sesso", "sex", setSex, null],
      ["Altezza", "height", setHeight, null],
      ["Peso", "weight", setWeight, null],
      [
        "Regione",
        "combo",
        setRegion,
        [
          "Sicilia",
          "Piemonte",
          "Marche",
          "Valle d'Aosta",
          "Toscana",
          "Campania",
          "Puglia",
          "Veneto",
          "Lombardia",
          "Emilia-Romagna",
          "Trentino-Alto Adige",
          "Sardegna",
          "Molise",
          "Calabria",
          "Abruzzo",
          "Lazio",
          "Liguria",
          "Friuli-Venezia Giulia",
          "Basilicata",
          "Umbria",
        ],
      ],
      [
        "Tipo Pelle",
        "combo",
        setTipoPelle,
        ["Molto chiara", "Chiara", "Intermedia", "Scura", "MoltoScura"],
      ],
      [
        "Istruzione",
        "combo",
        setIstruzione,
        ["Primaria", "Secondaria", "Laurea Breve", "Master-Phd"],
      ],
    ],
    [
      ["Hai il diabete", "bool", setDiabete, null],
      ["Sei cardiopatico", "bool", setCardiopatia, null],
      ["Soffri di Ipertensione", "bool", setIpertensione, null],
    ],
    [
      [
        "Stile di vita nel Tempo Libero",
        "combo",
        setStileVita,
        ["Leggera", "Moderata", "Pesante"],
      ],
      [
        "Stile di vita durante lo Studio/Lavoro",
        "combo",
        setStileVitaWork,
        ["Leggera", "Moderata", "Pesante"],
      ],
      [
        "Abitudine al fumo",
        "combo",
        setFumo,
        ["Nessuna", "Ex", "Lieve", "Moderata", "Intensa"],
      ],
      [
        "Abitudine all'alcol",
        "combo",
        setDroga,
        ["Nessuna", "Ex", "Lieve", "Moderata", "Intensa"],
      ],
      [
        "Abitudine alla droga",
        "combo",
        setAlcol,
        ["Nessuna", "Ex", "Lieve", "Moderata", "Intensa"],
      ],
      [
        "Dieta",
        "combo",
        setDieta,
        ["Poco Equilibrata", "Regolare", "Molto equilibrata"],
      ],
    ],
    [
      ["Familiarità patologie oncologiche", "bool", setFamilyOncologiche, null],
      ["Familiarità patologie metaboliche", "bool", setFamilyMetaboliche, null],
      [
        "Familiarità patologie cardiovascolari",
        "bool",
        setFamilyCardiovascolari,
        null,
      ],
      [
        "Familiarità patologie respiratorie",
        "bool",
        setFamilyRespiratorie,
        null,
      ],
      [
        "Familiarità patologie onco-ginecologiche",
        "bool",
        setFamilyOncoGinecologiche,
        null,
      ],
      [
        "Familiarità patologie onco-andrologiche",
        "bool",
        setFamilyOncoAndrologiche,
        null,
      ],
    ],
    [
      ["Vaccinazione anti-pneumococcia", "bool", setVaccinePneumococcica, null],
      ["Vaccinazione anti-zoster", "bool", setVaccineZoster, null],
      ["Vaccinazione anti-influenzale", "bool", setVaccineInfluenzale, null],
    ],
    [
      [
        "Ultimo check-up dermatologico",
        "combo",
        setLastCheckUpDermatologico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo esame emocromocitometrico",
        "combo",
        setLastEsameEmocromocitometrico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo check-up odontoiatrico",
        "combo",
        setLastCheckUpOdontoiatrico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo dosaggio glicemico",
        "combo",
        setLastDosaggioGlicemico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo dosaggio del colesterolo",
        "combo",
        setLastDosaggioColesterolo,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo check-up cardiologico",
        "combo",
        setLastCheckUpCardiologico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo check-up oculistico",
        "combo",
        setLastCheckUpOculistico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultima spirometria",
        "combo",
        setLastSpirometria,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo esame delle feci",
        "combo",
        setLastEsameFeci,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo check-up andrologico",
        "combo",
        setLastCheckUpAndrologico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultima pancolonscopia",
        "combo",
        setLastPancolonscopia,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo check-up ginecologico",
        "combo",
        setLastCheckUpGinecologico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultimo check-up senologico",
        "combo",
        setLastCheckUpSenologico,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
      [
        "Ultima TAC",
        "combo",
        setLastTac,
        ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "oltre 5 anni fa"],
      ],
    ],
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides pager={true} className="fullscreen">
          {array_questions[parseInt(match.params.id)].map((i: any) => {
            return (
              <BasicSlideQuestion
                question={i[0]}
                type={i[1]}
                hook={i[2]}
                answers={i[3]}
              />
            );
          })}
          <IonSlide>
            <IonButton
              onClick={() => sendDataToFirebase(parseInt(match.params.id))}
            >
              SEND
            </IonButton>
            <IonToast
              isOpen={showToast1}
              onDidDismiss={() => setShowToast1(false)}
              animated={true}
              message="Questionario inviato correttamente"
              position="bottom"
              duration={2000}
            />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Questionary;
