module.exports = function (sequelize, DataTypes){
    var Rol = sequelize.define("rol", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    Rol.associate = function(models) {
        models.rol.hasMany(models.usuario, {
            foreignKey: {
                defaultValue: 2,
                allowNull: false
            }
        });
    };

    return Rol;
}