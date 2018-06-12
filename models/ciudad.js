module.exports = function (sequelize, DataTypes){
    var Ciudad = sequelize.define("ciudad", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    Ciudad.associate = function(models) {
        Ciudad.belongsTo(models.estado);
        Ciudad.hasMany(models.usuario);
    };

    return Ciudad;
}