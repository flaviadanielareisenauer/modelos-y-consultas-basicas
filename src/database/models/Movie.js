module.exports = (sequelize, dataTypes) => {
  let alias = "Movies";
  let cols = {
    id: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: dataTypes.DATE,
      allowNull: true,
    },
    title: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    rating: {
      type: dataTypes.DECIMAL(3, 1).UNSIGNED,
      allowNull: false,
    },
    awards: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    releaseDate: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    length: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
    genreId: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
    },
  };
  let config = {
    tableName: "movies",
    timestamps: true,
  };

  const Movie = sequelize.define(alias, cols, config);
  return Movie;
};