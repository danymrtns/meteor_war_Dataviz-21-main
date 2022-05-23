# DI-Dataviz-21
Datavisualization course syllabus @campuslfi (2021)
Author : @alexr4 https://arivaux.com/2016/

## Objectif du cours
L'accès, la consultation et l'utilisation des données font aujourd'hui partie intégrante de la société et ses enjeux. Que ce soit améliorer un service, archiver des informations, ou les analyser ; les données sont désormais une composante indispensable des métiers du design qui cherchent à les comprendre et a en dessiner les patterns. Avec celles-ci vient la visualisation de donnée, du simple bar chart aux visualisations non-triviales, elles permettent une approche et une étude de ces données par la mise en place et l'utilisation d'un langage graphique dédié.

Ce cours a pour objectif d'explorer et comprendre ce qu'est le domaine de data visualisation, tant dans le fond que dans sa forme. Par une approche à la fois conceptuel et technique, nous apprendrons les grands principes de la data visualisation ainsi que sa production.

## Thématiques et sections
Ce cours sera divisé en plusieurs en sessions pour un total de 62h et abordera les sujets suivant : 

1. Semiologie de la data
2. Webdesign dataviz

Chaque cours pourra être théorique et/ou pratique. Nous y aborderont des sujets tel que : 

* L'histoire de la data visualisation
* Typologies de data
* Big Data & Open Data
* Esthetique de la Data
* Production technique
* Responsabilité et éthique


## Modules
### Une histoire de la data visualisation
#### Programme : 
* Introduction à la data visualisation
* De l'antiquité au 21e siècle
* VLW, MIT et Muriel Cooper
* De la Data Viz. à la Data Art (exemples et références)

#### Objectifs :

* Découvrir ce qu'est la datavisualisation et son utilisation dans différents domaines

#### Sessions :
* 02 Dec. 2020 (AM)

### Une approche de la data visualisation
#### Programme : 
* Dataviz, dataset et data
* Quel histoire raconter, quel process
* Objectifs, audience et contexte
* Typologies de datavisualisation (différence, relations, proportions, temps...)
* La Gestalt theory appliquée aux data
* L'utilisation des «variables visuelles de Bertin»
* Introduction aux couleurs dans la visualisation de données

#### Objectifs :
* Découvrir les différentes étapes necessaires à la création d'une data viz
* Comprendre les différente typologie de représentations de données
* Appréhender les principes de Gesltat et leur application dans le domaine de la data visualisation

#### Sessions :
* 03 Dec. 2020 AM

### Une première manipulation des data
#### Programme : 
* Découverte du Dataset (Meteorite landing de nasa.gov) 
* Découverte de P5.JS
* Mapper les données sur une carte statique (Equirectangular)
* Cartographier des données sur une carte dynamique (Leaflet.js)

#### Objectifs :
* Comprendre le format de donnée CSV
* Savoir charger et manipuler des données depuis un logiciel de type tableur
* Analyser des données et distinguer les différents type
* Illustrer les données sur une carte statique equirectangulaire
* Comprendre les systême de cartographie geolocalisés (Longitude/latitude)
* Utiliser leaflet via Mappa.js
* Comprendre et utiliser le système de tile pour designer sa carte
* Mapper les données du cours précédent sur la carte dynamique

#### Sessions :
* 03 Dec. 2020 PM
* 17 Dec. 2020 AM
* 17 Dec. 2020 PM

### Exercice :
*À partir des connaissances jusque là acquises, réaliser votre propre cartographie des données issues de la nasa MeteorLanding.
Votre cartographie pourra être 2D ou 3D. Elle pourra présenter une ou plusieurs information par data. Elle pourra être animée ou statique.*

#### Présentation des travaux et critiques __12 Jan. 2021__

### Grapher des data
#### Programme : 
* Représenter des données sur un graphique et les mettre en relation

#### Objectifs :
* Savoir charger des données en JS Natif via la méthode Fetch()
* Découvrir Graph.js
* Assembler des données sur un graphique présenter sur le DOM

#### Sessions :
* 12 Jan. 2021 PM

### Exercice :
*À partir de l'exercice précédent, des critique faites en cours, et des connaissances acquises ce jour ; designer et réaliser une page présentant l'ensemble des données meteorLanding issues de la Nasa.
Votre page devra présenter les données sur une carte ainsi que 4 graphiques différents. Vous définirez les graphs à réaliser à partir de votre analyse de données afin d'en définir leur pertinence. Vous pourrez orienter votre travail autour de différents axe tel que le temps, la composition, la pertinence des données, les données manquantes...*

#### Présentation des travaux et critiques __28 Jan. 2021__

### Les données libres : Open Data API
#### Programme : 
* Découvrir le monde des données OpenSource
* Interroger une API et récupérer des données
* API Libre : opendata.paris.fr
* API avec token
* Publier son projet sur Github

#### Objectifs :
* Comprendre le format de donnée JSON
* Découvrir ce qu'est une API
* Analyser des données et distinguer les différents type
* Interroger une API et recupérer des données
* Illustrer les données dans une représentation simple
* Interroger une API avec Token (openweathermap.org)
* Introduction à GitHub + publication

#### Sessions :
* 28 Jan. 2021 AM
* 28 Jan. 2021 PM

### Exercice :
*À partir des connaissances acquises ce jour ; designer et réaliser une datavisualisation à partir d'un des dataset disponible sur le portail OpenData.Paris.
Votre dataviz présentera le dataset sous la 2 formes graphiques différentes de votre choix qui formeront un discours complet sur le dataset.*

#### Présentation des travaux et critiques __12 Fev. 2021__

### Data côté server : NODE JS
#### Programme : 
* Réaliser une application server/client capable d'enregistrer des données dans un base puis des les visualiser
* Qu'est ce que NODE.JS et NPM
* Accéder à la geolocation côté client
* Qu'est-ce qu'une BDD
* Enregistrer des données dans sa BDD
* Accéder au composants media (photo/audio/video)
* Appels API depuis NodeJS
* Travailler avec plusieurs API

#### Objectifs :
* Apprendre les bases de la programmation côté serveur
* Apprendre à enregistrer une donnée dans un BDD via NeDB
* Découverte de la méthode Fetch()  pour l'enregistrement de données
* Apprendre à déployer son projet sur GIT, GLITCH ou HEROKU

#### Sessions :
* 12 Fev. 2021 AM
* 12 Fev. 2021 PM
* 26 Mar. 2021 AM
* 26 Mar. 2021 PM

### Exercice 1 __12 Fev. 2021__
*À partir des connaissances acquises, imaginez une application de capture de données. Cette application devra permettre à l'utilisateur de capturer des données et les enregistrer dans un BDD.
Vous choisirez les données que vous souhaitez tracker en vous inspirant de différents projets artistique ou sociaux tel que ceux de Lauren McCarthy ou OpenLittermap.
Votre interface devra être simplue d'utilisation à destination du desktop ou du mobile (selon votre choix) ou completement responsive.*

### Exercice 2 __26 Mar. 2021__
*À partir de l'exercice précédent, des critique faites en cours, et des connaissances acquises ce jour ; imaginez une application de capture et visualisation de données. Cette application devra permettre à l'utilisateur de capturer des données et les enregistrer dans un BDD et d'en voir une visualisation complète. Vous pourrez partir des données captées lors de l'exercice précédent ou partir d'un nouveau modèle.
Vous choisirez les données que vous souhaitez tracker en vous inspirant de différents projets artistique ou sociaux tel que ceux de Lauren McCarthy ou OpenLittermap.
Votre interface devra être simplue d'utilisation à destination du desktop ou du mobile (selon votre choix) ou completement responsive.*

#### Présentation des travaux et critiques __07 Mai 2021__

### Introduction à la data art
#### Programme :
* La donnée comme medium

#### Objectifs :
* Savoir utiliser et détourner une donnée dans le cadre d'un projet de DATA ART
* Experimenter graphiquement avec la donnée
* Travailler la donnée avec un nouveau niveau d'abstraction graphique

#### Sessions :
* 07 Mai 2021

### Exercice :
*À partir des connaissances acquises imaginez et réaliser un projet de data art.
Votre projet pourra se baser sur des API déja manipulé ou de nouvelles. Vous pourrez également repartir des données que vous aviez tracké lors des cours précédents.
Votre projet devra se focaliser sur l'aspect graphique de la donnée et non sa compréhension. Vous apporterez un soin particulier au design*

#### Présentation des travaux et critiques __19 Mai 2021__

### Projet Long
#### Sujet :
À partir des connaissances acquises, imaginer un projet complet de datavisualisation.
Votre projet pourra avoir une portée d'information, social ou artistique.

Il devra comporter plusieurs partie dont : 
* Récupération de donnée : 
* * Par l'utilisateur via une interface (un à plusieurs utilisateurs)
* * Via des API diverses 
* Visualisation de données permmetant de comprendre le projet et ses différents points de vue

Votre projet devra fonctionner en ligne et être accessible à tout utilisateur. 
Il sera également developpé de manière responsive.
Vous apporterez un soin particulier à l'éthique de la data, à la pertinence de votre sujet, et au design.
Vous récupérerez des données auprès de divers utilisateur afin de créer votre visulisation

#### Sessions
* 19 Mai 2021 AM
* 03 Juin 2021 AM
* 18 Juin 2021 AM

#### Présentation **18 Juin 2021 PM**

## Resources (non triés)
### Semiologie de la data
* https://visionscarto.net/la-semiologie-graphique-a-50-ans
* https://docs.google.com/presentation/d/1B0zyRjWXHLkOw4ZBHcSYy2JsCLYGqN18hnX92vayz5Q/edit#slide=id.p
* https://docs.google.com/presentation/d/1QGgB0dfZO3hv8fRvluQGwAFOZQs6WTJ6p205Nl4MHNA/edit#slide=id.g55ed794710_0_104
* https://docs.google.com/presentation/d/1lfs3E0S3BPQ-M3Nq3Px8uAXRY6TgJgkh32eYTIibvcQ/edit#slide=id.ge285109f7_1_96
* https://docs.google.com/presentation/d/1Us7efeqjw5sPV4ihrMZ_zNwV6NfBSPOI6XO9kjfYDkU/edit#slide=id.g549eab6b53_2_0

### Tools
* https://fathom.info/mirador/
* https://kepler.gl/

### Data set
* http://opendata.paris/
* http://api.bnf.fr/api-document-de-gallica
* https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
* https://github.com/ExpDev07/coronavirus-tracker-api
* https://www.data.gouv.fr/fr/

### Programmation
* https://github.com/alexr4/DI-DataArt
* https://github.com/alexr4/2019-4DI-DataArt
* https://github.com/owid/covid-19-data/tree/master/public/data
* https://github.com/robinparmar/processing_covid19
* https://thecodingtrain.com/Courses/data-and-apis/
