require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
app.use(express.json());

// Config connexion BDD via Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

// Test
sequelize.authenticate()
  .then(() => {
    console.log('Connexion réussie BDD');
  })
  .catch(err => {
    console.error('Erreur:', err);
  });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur OK, port ${PORT}`);
});
