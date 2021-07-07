const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.hasMany(models.genreMovie, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE'
      });
    }
  }

  Movie.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfRelease: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      defaultValue: 'released',
      values: [
        'released',
        'coming_soon',
      ]
    },
    imageUrls: {
      allowNull: true,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    trailerUrl: DataTypes.STRING,
    cast: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    creators: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    summary: DataTypes.TEXT,
    isDeleted: DataTypes.BOOLEAN,
    rated: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return Movie;
};
