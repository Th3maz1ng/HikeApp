# HikeApp

Schramm-Henry Anatole
Robin Gwenn

L'application présente l'ensemble des vues exigées. 
Elle propose les fonctionalités suivantes :
  - Afficher le détail des randonnées 
    - Affichage des infos pratiques récupérées via la WebApi
    - Affichage du plan de la randonnée via un tracé Leaflet
    - Possibilité de lancer une randonnée
  - Effectuer une randonnée :
    - Lance un Timer indiquant le temps passé depuis le début de la randonnée lorsque l'on clique sur Start depuis le détail d'une rando ou sur let's hike depuis la liste des randonnées.
    - utilisation des cookies pour la persistance des timers lorsque l'on quitte une randonnée ou l'application
    - utilisation du timestamp afin de garder une certaine précision avec les timers
    - possibilité d'avoir plusieurs timers en parallèle.
    - Suivi GPS en temps réel
    - Affichage des étapes en cours au fur et à mesure du déplacement


Les points "difficiles"
  L'intégration de Leaflet (gestion du cycle de vie), ainsi que du module leaflet-gpx pour la map nous a posé quelques soucis 
  réglés par la suite.
  
