# Présentation
Projet api de lecture d'articles en Node/Express, ORM Sequelize, BDD MySQL, PhpMyAdmin, Jest, Github Actions, Docker Hub.


# Installation et lancement du projet Dockerisé
"npm install"
"docker-compose up --build -d" (pour lancer le service docker BDD MySQL, Node, et PhpMyAdmin, exécuter les migrations, ajouter les fictures d'articles)
(
    logs des conteneurs si lancé avec "-d": 
        "docker-compose logs node-app"
        "docker-compose logs database" (voir le HealthCheck par exemple)
)
PhpMyAdmin: http://localhost:8080 ("dbuser", "dbmpd", BDD: "dbname")

Routes API de l'app:
http://localhost:3000
http://localhost:3000/articles


# Schéma de BDD et privilèges
- ORM Sequelize: Sequelize se base sur le fichier de config ".sequelizerc" pour repérer les dossiers de app/models, app/migrations, et app/fixtures (= "seeds"), et sur le fichier "config/config.js" pour accéder à la base de données
  
- Schéma: Le schéma de la base de données se base sur le fichier de model Sequelize models/Articles.js où on définit la structure, les colonnes et les propriétés de la table Article.
  
Entrypoint du Dockerfile Node:
- Migrations: "npx sequelize-cli migration:generate --name create-article"
- Fixtures/seeds: "npx sequelize-cli seed:generate --name fixtures-articles"
  
- Privilèges: On a un fichier sql "init-user-privileges.sql" qui créé un nouvel user et lui accorde des droits spécifiques concernant la base de données lors du premier démarrage du conteneur "database".


# Testing
Tests unitaires avec Jest (app/tests/articles.test.js)
"docker exec -it node_app npm test" (depuis le conteneur docker)

On teste:
    - le statut de la requête api get /articles
    - le nombre de résultats dans la réponse (2 articles de tests => expect 2)
    - le fait que les articles possèdent une propriété "titre" et "contenu" 


# Pipeline CI/CD "Github Actions"
/.github/workflows/ci-cd.yaml

-> Les tests passent bien sur l'environnement de github Actions lors d'un push sur la branche main (voir [/](https://github.com/baku67/3wa-projet-eval-devops/actions/runs/14406456221/job/40404081471))

-> Le build de l'image et l'upload sur DockerHub fonctionnent
https://hub.docker.com/r/nujabb/eval-devops

-> Le déploiement sur AWS EC2 n'a pas été fait jusqu'au bout (je suis en train de la faire sur une instance pour mon projet personnel de formation "bubblebook" mais je n'ai pas terminé)