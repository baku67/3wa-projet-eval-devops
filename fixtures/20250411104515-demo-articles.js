'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Article', [
      { titre: 'Article 1', contenu: 'Contenu de l\'article 1', dt_publication: new Date() },
      { titre: 'Article 2', contenu: 'Contenu de l\'article 2', dt_publication: new Date() },
      { titre: 'Article 3', contenu: 'Contenu de l\'article 3', dt_publication: new Date() },
      { titre: 'Article 4', contenu: 'Contenu de l\'article 4', dt_publication: new Date() },
      { titre: 'Article 5', contenu: 'Contenu de l\'article 5', dt_publication: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
      * TODO: DROP ici "bulkDelete"
     */
  }
};
