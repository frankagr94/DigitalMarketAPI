module.exports = function (sequelize, DataTypes){
    var Pais = sequelize.define("pais", {
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

   Pais.associate = function(models) {
        models.pais.hasMany(models.estado, {
            foreignKey: {
                name: 'paiId',
                allowNull: false,
                as: 'estados'
            }
        });
        Pais.hasMany(models.usuario, { as: 'pais' });
    };

    return Pais;
}