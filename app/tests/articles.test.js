const request = require('supertest');
const express = require('express');
const { Sequelize } = require('sequelize');
const Article = require('../models/Articles');  
const articlesRouter = require('../routes/articles');  

const app = express();
app.use(express.json());
app.use('/articles', articlesRouter);

// Après les tests => fermer connexion BDD
afterAll(async () => {
  const sequelize = require('../models/sequelize-instance');
  await sequelize.close();
});

describe('GET /articles', () => {
    // Données de tests avant chaque test
    beforeEach(async () => {
    await Article.destroy({ truncate: true });
    await Article.bulkCreate([
      { titre: 'TEST1', contenu: 'test1' },
      { titre: 'TEST2', contenu: 'test2' }
    ]);
  });

  // Supprimez les articles après chaque test
  afterEach(async () => {
    await Article.destroy({ truncate: true });
  });

  it('Doit renvoyer la liste des articles avec le bon nombre d\'éléments et leurs propriétés', async () => {
    const res = await request(app).get('/articles');
    expect(res.statusCode).toBe(200);
    
    expect(res.body.length).toEqual(2);
    res.body.forEach(article => {
      expect(article).toHaveProperty('titre');
      expect(article).toHaveProperty('contenu');
    });
  });
});
