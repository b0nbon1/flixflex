const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      Genre.hasMany(models.genreMovie, {
        foreignKey: 'genreId',
        onDelete: 'CASCADE'
      });
    }
  }
  Genre.init({
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'genre',
  });
  return Genre;
};
