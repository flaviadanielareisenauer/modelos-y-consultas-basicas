module.exports = (sequelize, dataTypes) => {
  let alias = "Genres";
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
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    ranking: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true,
    },
    active: {
      type: dataTypes.INTEGER(1),
      allowNull: false,
      defaulValue: 1,
    },
  };
  let config = {
    tableName: "genres",
    timestamps: true,
  };
  const Genre = sequelize.define(alias, cols, config);
  return Genre;
};