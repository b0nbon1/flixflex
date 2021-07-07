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
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        defaultValue: 'released',
        values: ['released', 'coming_soon'],
      },
      imageUrls: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
      },
      trailerUrl: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      cast: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      creators: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      summary: {
        type: Sequelize.TEXT,
        allowNull: true,
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
