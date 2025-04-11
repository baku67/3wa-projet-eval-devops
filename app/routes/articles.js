const express = require('express');
const router = express.Router();
const Article = require('../models/Articles');

/**
 * @route GET /articles
 * @desc Récupère tous les articles
 */
router.get('/', async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    res.status(500).json({ error: 'Erreur 500' });
  }
});

module.exports = router;
