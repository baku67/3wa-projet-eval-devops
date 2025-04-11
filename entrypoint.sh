#!/bin/sh

#Même s'il y a le "depends on HealthCheck DB" pour être sur: 
echo "Attente de la disponibilité de MySQL..."
sleep 5

echo "Migration Sequelize"
npx sequelize-cli db:migrate

echo "Ajout Fixtures articles"
npx sequelize-cli db:seed:all

echo "Démarrage de l'app Node..."
node server.js
