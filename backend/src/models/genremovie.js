const { v4: uuidv4 } = require('uuid');
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GenreMovie extends Model {
    static associate(models) {
      GenreMovie.belongsTo(models.movie, {
        allowNull: false,
        foreignKey: 'movieId',
        onDelete: 'CASCADE'
      });
      GenreMovie.belongsTo(models.genre, {
        allowNull: false,
        foreignKey: 'genreId',
        onDelete: 'CASCADE'
      });
    }
  }
  GenreMovie.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    movieId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    genreId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'genreMovie',
  });
  return GenreMovie;
};
