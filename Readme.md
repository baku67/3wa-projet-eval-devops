# Présentation
Github Actions (au lieu de Jenkins)
Node (au lieu de Python)

Dépendances du projet Node:
Express, Sequelize, MySQL2, dotenv
Nodemon pour Hotreload

# Installation et lancement du projet Dockerisé
"npm install"
"docker-compose up --build -d" (pour lancer le service BDD MySQL et build Node)
(logs du conteneur Node si lancé avec "-d": 
    "docker-compose logs node-app"
    "docker-compose logs database" (voir le HealthCheck par exemple)
)


# Schéma de BDD et privilèges
- Le schéma de la base de données se base sur le fichier de model Sequelize models/Articles.js où on définit la structure, les colonnes et les propriétés de la table Article.
- Fixtures: 
- Privilèges: 
