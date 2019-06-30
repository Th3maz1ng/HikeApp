# HikeApp

Schramm-Henri Anatole
Robin Gwenn

L'application présente l'ensemble des vues exigées. 
Elle propose les fonctionalités suivantes :
  - Afficher le détail des randonnées 
    - Affichage des infos pratiques récupérées via la WebApi
    - Affichage du plan de la randonnée via un tracé Leaflet
    - Possibilité de lancer une randonnée
  - Effectuer une randonnée :
    - Lancer un Timer indiquant le temps passé depuis le lancement
      - utilisation des cookies pour la persistance quand hors connexion
    - Suivi en temps réel
    -Affichage des étapes en cours au fur et à mesure du déplacement


Les points "difficiles"
  L'intégration de Leaflet (gestion du cycle de vie), ainsi que du module leaflet-gpx pour la map nous a posé quelques soucis 
  réglés par la suite.
  
