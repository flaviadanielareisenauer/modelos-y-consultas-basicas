module.exports = (sequelize, dataTypes) => {
  let alias = "Actors";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: {
        type: dataTypes.DATE,
        allowNull: true,
      },
    },
    firstName: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    rating: {
      type: dataTypes.DECIMAL(3, 1),
      allowNull: true,
    },
    favoriteMovieId: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
  };
  let config = {
    tableName: "actors",
    timesTamps: true,
  };
  const Actor = sequelize.define(alias, cols, config);
  return Actor;
};