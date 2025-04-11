require('dotenv').config();
const express = require('express');
const sequelize = require('./sequelize-instance');
const { Sequelize } = require('sequelize');

const app = express();
app.use(express.json());

// Test
sequelize.authenticate()
  .then(() => {
    console.log('Connexion réussie BDD');
  })
  .catch(err => {
    console.error('Erreur lors de la connexion à la BDD:', err);
  });

  
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const Article = require('./models/Articles');
app.get('/articles', async (req, res) => {
    try {
      const articles = await Article.findAll();
      res.json(articles);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
      res.status(500).json({ error: 'Erreur 500' });
    }
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur OK, port ${PORT}`);
});
