import numpy as np
import pandas as pd
from faker import Faker

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from datetime import datetime


def timestamp(dt):
    epoch = datetime.utcfromtimestamp(0)
    return (dt - epoch.date()).total_seconds() * 1000.0


fake = Faker('it_IT')

# Use a service account
cred = credentials.Certificate('assets\healthabit-fcb7b-622c16edfd55.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# GENERATORS
SESSO = ["Donna", "Uomo", "Altro"]
ANNO = ['2020', '2021']
MESE = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
REGIONE = ["Sicilia", "Piemonte", "Marche", "Valle d'Aosta", "Toscana", "Campania", "Puglia", "Veneto",
           "Lombardia", "Emilia-Romagna", "Trentino-Alto Adige", "Sardegna", "Molise", "Calabria",
           "Abruzzo", "Lazio", "Liguria", "Friuli-Venezia Giulia", "Basilicata", "Umbria"]
PELLE = ["Molto chiara", "Chiara", "Intermedia", "Scura", "Molto scura"]
ISTRUZIONE = ["Primaria", "Secondaria", "Laurea Breve", "Master/PhD"]
ATTIVITA = ["Pesante", "Moderata", "Leggera"]
ABITUDINE = ["Nessuna", "Lieve", "Ex", "Moderata", "Intensa"]
DIETA = ["Poco equilibrata", "Regolare", "Molto equilibrata"]
TIMING = ["Meno di 1 anno fa", "1-3 anni fa", "3-5 anni fa", "Oltre 5 anni fa"]
SINTOMI = ["Lievi", "Moderati", "Intensi"]
VISITE = [
    "Agoaspirato", "Marcatori tumorali", "Colonscopia",
    "Visita odontoiatrica",
    "Ecografia mammaria", "Ecografia transvaginale", "Hpv Dna Test", "Pap-Test", "Mammografia",
    "Elettrocardiogramma", "Holter", "Coronarografia", "Ecocardiografia",
    "Biopsia prostatica",
    "Spirometria", "Esame del sangue",
    "Pet", "Risonanza magnetica (RM)", "Scintigrafia",
]
AREE = ["Oncologica", "Odontoiatrica", "Ginecologica",
        "Cardiologica", "Andrologica", "Generale", "Diagnostica"]

# QUESTIONARI
ID = [
    "nome_cognome",
    "data_iscrizione",
    "eta",
    "sesso",
    "regione",
    "peso",
    "altezza",
    "pelle",
    "istruzione",
    "quiz_categorieRischio",
    "quiz_covid",
    "quiz_familiarita",
    "quiz_salutePersonale",
    "quiz_stileDiVita",
    "quiz_vaccini",
]
RISCHIO = [
    "diabete",
    "diag_diabete",
    "cardiopatia",
    "ipertensione",
]
STILE = [
    "attivita_lavoro",
    "attivita_tl",
    "fumo",
    "alcol",
    "sostanze",
    "dieta"
]
FAMILIARITA = [
    "fam_onco",
    "fam_meta",
    "fam_cardio",
    "fam_resp",
    "fam_onco_gino",
    "fam_onco_andro"
]
VACCINI = [
    "vacc_pnmccc",
    "vacc_zoster",
    "vacc_influ"
]
CUP = [
    "cup_derma",
    "cup_sangue",
    "cup_odonto",
    "cup_glicemia",
    "cup_cole",
    "cup_cardio",
    "cup_oculo",
    "cup_spiro",
    "cup_feci",
    "cup_andro",
    "cup_colon",
    "cup_gino",
    "cup_seno",
    "cup_tac",
    "cup_onco"
]
COVID = [
    "covid",
    "sintomi",
    "vaccino"
]
VISITA = [
    "Data",
    "Eseguita",
    "Nome",
    "Tipologia",
    "Prenotata",
]


def send_user_to_fb(my_row):
    doc_ref = db.collection(u'users').document(my_row['mail'])
    doc_ref.set({
        k: my_row[k] for k in ID if k in my_row.keys()
    })
    doc_ref = db.collection(u'users').document(my_row['mail']).collection(u'Categorie a rischio').document()
    doc_ref.set({
        k: my_row[k] for k in RISCHIO if k in my_row.keys()
    })
    doc_ref = db.collection(u'users').document(my_row['mail']).collection(u'Stile di Vita').document()
    doc_ref.set({
        k: my_row[k] for k in STILE if k in my_row.keys()
    })
    doc_ref = db.collection(u'users').document(my_row['mail']).collection(u'Familiarità').document()
    doc_ref.set({
        k: my_row[k] for k in FAMILIARITA if k in my_row.keys()
    })
    doc_ref = db.collection(u'users').document(my_row['mail']).collection(u'Vaccini').document()
    doc_ref.set({
        k: my_row[k] for k in VACCINI if k in my_row.keys()
    })
    doc_ref = db.collection(u'users').document(my_row['mail']).collection(u'Salute personale').document()
    doc_ref.set({
        k: my_row[k] for k in CUP if k in my_row.keys()
    })
    doc_ref = db.collection(u'users').document(my_row['mail']).collection(u'COVID19').document()
    doc_ref.set({
        k: my_row[k] for k in COVID if k in my_row.keys()
    })


def send_visit_to_fb(my_visit):
    doc_ref = db.collection(u'users').document(my_visit['mail']).collection(u'visite').document()
    doc_ref.set({
        k: my_visit[k] for k in VISITA if k in my_visit.keys()
    })
    

def create_users():
    my_row = {}
    my_visit = {}
    # IDENTIFICAZIONE
    my_row['data'] = fake.date_between_dates(date_start=datetime(2020, 1, 1))
    my_row['data_iscrizione'] = timestamp(dt=my_row['data'])
    my_row['sesso'] = np.random.choice(SESSO, 1)[0]
    if my_row['sesso'] == 'Donna':
        my_row['nome_cognome'] = fake.name_female()
    elif my_row['sesso'] == 'Uomo':
        my_row['nome_cognome'] = fake.name_male()
    else:
        my_row['nome_cognome'] = fake.name()
    my_row['mail'] = my_row['nome_cognome'].lower().replace(' ', '.') + '@gmail.com'
    my_row['eta'] = fake.pyint(min_value=18, max_value=90, step=1)
    my_row['regione'] = np.random.choice(REGIONE, 1)[0]
    my_row['peso'] = fake.pyint(min_value=40, max_value=140, step=1)
    if my_row['peso'] > 90:
        my_row['altezza'] = fake.pyint(min_value=160, max_value=205, step=1)
    else:
        my_row['altezza'] = fake.pyint(min_value=140, max_value=180, step=1)
    my_row['pelle'] = np.random.choice(PELLE, 1)[0]
    if my_row['eta'] < 26:
        my_row['istruzione'] = np.random.choice(ISTRUZIONE[:-1], 1)[0]
    else:
        my_row['istruzione'] = np.random.choice(ISTRUZIONE, 1)[0]
    
    # CATEGORIA A RISCHIO
    my_row['diabete'] = fake.pybool()
    if my_row['diabete']:
        my_row['diag_diabete'] = fake.date().split('-')[0]
    my_row['cardiopatia'] = fake.pybool()
    my_row['ipertensione'] = fake.pybool()
    
    # STILE  DI VITA
    my_row['attivita_lavoro'] = np.random.choice(ATTIVITA, 1)[0]
    my_row['attivita_tl'] = np.random.choice(ATTIVITA, 1)[0]
    my_row['fumo'] = np.random.choice(ABITUDINE, 1)[0]
    my_row['alcol'] = np.random.choice(ABITUDINE, 1)[0]
    my_row['sostanze'] = np.random.choice(ABITUDINE, 1)[0]
    my_row['dieta'] = np.random.choice(DIETA, 1)[0]
    
    # FAMILIARITA
    my_row['fam_onco'] = fake.pybool()
    my_row['fam_meta'] = fake.pybool()
    my_row['fam_cardio'] = fake.pybool()
    my_row['fam_resp'] = fake.pybool()
    if my_row['sesso'] == 'Donna' or my_row['sesso'] == 'Altro':
        my_row['fam_onco_gino'] = fake.pybool()
    if my_row['sesso'] == 'Uomo' or my_row['sesso'] == 'Altro':
        my_row['fam_onco_andro'] = fake.pybool()
    
    # VACCINI
    if my_row['eta'] >= 65:
        my_row['vacc_pnmccc'] = fake.pybool()
        my_row['vacc_zoster'] = fake.pybool()
        my_row['vacc_influ'] = fake.pybool()
    
    # ULTIMO CHECK-UP
    if my_row['pelle'] in PELLE[0:3]:
        my_row['cup_derma'] = np.random.choice(TIMING, 1)[0]
    my_row['cup_sangue'] = np.random.choice(TIMING, 1)[0]
    my_row['cup_odonto'] = np.random.choice(TIMING, 1)[0]
    if my_row['eta'] >= 25:
        my_row['cup_cardio'] = np.random.choice(TIMING, 1)[0]
        my_row['cup_oculo'] = np.random.choice(TIMING, 1)[0]
        if my_row['dieta'] == DIETA[0] or my_row['fam_meta']:
            my_row['cup_glicemia'] = np.random.choice(TIMING, 1)[0]
            if my_row['attivita_tl'] == ATTIVITA[2]:
                my_row['cup_cole'] = np.random.choice(TIMING, 1)[0]
    if my_row['sesso'] == 'Donna' or my_row['sesso'] == 'Altro':
        my_row['cup_gino'] = np.random.choice(TIMING, 1)[0]
        if my_row['eta'] >= 30:
            my_row['cup_seno'] = np.random.choice(TIMING, 1)[0]
    if my_row['sesso'] == 'Uomo' or my_row['sesso'] == 'Altro':
        my_row['cup_andro'] = np.random.choice(TIMING, 1)[0]
    if my_row['eta'] >= 40:
        my_row['cup_feci'] = np.random.choice(TIMING, 1)[0]
    if my_row['eta'] >= 50:
        my_row['cup_colon'] = np.random.choice(TIMING, 1)[0]
    if my_row['fam_onco']:
        my_row['cup_onco'] = np.random.choice(TIMING, 1)[0]
        if my_row['alcol'] in ABITUDINE[2:] or my_row['fumo'] in ABITUDINE[2:]:
            my_row['cup_tac'] = np.random.choice(TIMING, 1)[0]
    
    if bool(set(my_row.keys()) & set(RISCHIO)):
        my_row['quiz_categorieRischio'] = True
    if bool(set(my_row.keys()) & set(FAMILIARITA)):
        my_row['quiz_familiarita'] = True
    if bool(set(my_row.keys()) & set(COVID)):
        my_row['quiz_covid'] = True
    if bool(set(my_row.keys()) & set(VACCINI)):
        my_row['quiz_vaccini'] = True
    if bool(set(my_row.keys()) & set(STILE)):
        my_row['quiz_stileDiVita'] = True
    if bool(set(my_row.keys()) & set(CUP)):
        my_row['quiz_salutePersonale'] = True
    
    my_visit['mail'] = my_row['mail']
    my_visit['Data'] = timestamp(dt=fake.date_between_dates(date_start=my_row['data']))
    my_visit['Nome'] = np.random.choice(VISITE, 1)[0]
    if my_visit['Nome'] in VISITE[0:3]:
        my_visit['Tipologia'] = "Oncologica"
    elif my_visit['Nome'] == 'Visita odontoiatrica':
        my_visit['Tipologia'] = "Odontoiatrica"
    elif my_visit['Nome'] in VISITE[4:9]:
        my_visit['Tipologia'] = "Ginecologica"
    elif my_visit['Nome'] in VISITE[9:13]:
        my_visit['Tipologia'] = "Cardiologica"
    elif my_visit['Nome'] == 'Biopsia prostatica':
        my_visit['Tipologia'] = "Andrologica"
    elif my_visit['Nome'] in VISITE[14:16]:
        my_visit['Tipologia'] = "Generale"
    elif my_visit['Nome'] in VISITE[16:]:
        my_visit['Tipologia'] = "Diagnostica"
    my_visit['Prenotata'] = fake.pybool()
    if my_visit['Prenotata']:
        my_visit['Eseguita'] = fake.pybool()
    else:
        my_visit['Eseguita'] = False
    
    return send_user_to_fb(my_row), send_visit_to_fb(my_visit)


for _ in range(50):
    create_users()
