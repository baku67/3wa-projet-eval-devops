require('dotenv').config();
const express = require('express');
const sequelize = require('./models/sequelize-instance');

const app = express();
app.use(express.json());

// Test BDD:
sequelize.authenticate()
  .then(() => {
    console.log('Connexion réussie BDD');
  })
  .catch(err => {
    console.error('Erreur lors de la connexion à la BDD:', err);
  });


// Routes:
const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);


// Démarrage du serveur:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur OK, port ${PORT}`);
});
