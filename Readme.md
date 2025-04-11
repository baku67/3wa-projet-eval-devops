# Présentation
Node (au lieu de Python)
Github Actions (au lieu de Jenkins)

Dépendances du projet Node:
Express, Sequelize, MySQL, dotenv


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


# Schéma de BDD et privilèges
- Le schéma de la base de données se base sur le fichier de model Sequelize models/Articles.js où on définit la structure, les colonnes et les propriétés de la table Article.
- Fixtures: 
- Privilèges: 
