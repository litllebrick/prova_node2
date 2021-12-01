module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    estado: DataTypes.STRING,
    sites: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true
  })

return team

}