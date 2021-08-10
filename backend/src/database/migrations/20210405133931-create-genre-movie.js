const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('genreMovie', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4(),
      },
      movieId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'movies',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      genreId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'genres',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
        onUpdate: 'cascade',
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
    await queryInterface.dropTable('genreMovie');
  },
};
