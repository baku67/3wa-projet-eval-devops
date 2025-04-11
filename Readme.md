# Présentation
Projet api de lecture d'articles en Node/Express, ORM Sequelize, BDD MySQL, PhpMyAdmin, Github Actions.


# DEV
Sequelize se base sur le fichier de config ".sequelizerc" pour repérer les dossiers de models, migrations, et Fixtures/seeds, et sur le fichier "config/config.js" pour accéder à la base de données
## Génération des migrations de schéma de Base de données avec Sequelize CLI
"npm install --save-dev sequelize-cli"
"npx sequelize-cli migration:generate --name create-article"
## Génération des fichiers de Fixtures / Seeds avec Sequelize CLI
"npx sequelize-cli seed:generate --name fixtures-articles"

# Installation et lancement du projet Dockerisé
"npm install"
"docker-compose up --build -d" (pour lancer le service docker BDD MySQL, Node, et PhpMyAdmin)
(
    logs des conteneurs si lancé avec "-d": 
        "docker-compose logs node-app"
        "docker-compose logs database" (voir le HealthCheck par exemple)
)
PhpMyAdmin: http://localhost:8080 (dbname, dbuser, dbmpd)

Routes de l'app:
http://localhost:3000
http://localhost:3000/articles


# Schéma de BDD et privilèges
- Schéma: Le schéma de la base de données se base sur le fichier de model Sequelize models/Articles.js où on définit la structure, les colonnes et les propriétés de la table Article.
- Migrations: 
- Fixtures/seeds:
- Privilèges: On a un fichier sql "init-user-privileges.sql" qui créé un nouvel user et lui accorde des droits spécifiques concernant la base de données lors du premier démarrage du conteneur "database".
+----------------------------------------------------------------------+
| Grants for app_user@%                                                |
+----------------------------------------------------------------------+
| GRANT USAGE ON *.* TO `app_user`@`%`                                 |
| GRANT SELECT, INSERT, UPDATE, DELETE ON `dbname`.* TO `app_user`@`%` |
+----------------------------------------------------------------------+


# Testing
Tests unitaires avec Jest (app/tests/articles.test.js)
"docker exec -it node_app npm test" (depuis le conteneur docker)

On teste:
    - le statut de la requête api get /articles
    - le nombre de résultats dans la réponse (2 articles de tests => expect 2)
    - le fait que les articles possèdent une propriété "titre" et "contenu" 

# Pipeline CI/CD "Github Actions"