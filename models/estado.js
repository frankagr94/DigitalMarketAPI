module.exports = function (sequelize, DataTypes){
    var Estado = sequelize.define("estado", {
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

    Estado.associate = function(models) {
        models.estado.hasMany(models.ciudad, {
            foreignKey: {
                name: 'estadoId',
                allowNull: false
            }
        });
        Estado.belongsTo(models.pais);
        Estado.hasMany(models.usuario);
    };

    return Estado;
}