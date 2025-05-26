module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Compound', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    timestamps: false,
    tableName: 'compounds'
  });
};