const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4(),
      },
      genreId: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.STRING,
      },
      dateOfRelease: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        defaultValue: 'released',
        values: ['released', 'coming_soon'],
      },
      imageUrl: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      trailerUrl: {
        type: Sequelize.STRING,
      },
      cast: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      creators: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      summary: {
        type: Sequelize.TEXT,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      rated: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('movies');
  },
};
