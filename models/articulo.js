module.exports = function (sequelize, DataTypes){
    var Articulo = sequelize.define("articulo", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT(),
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER(),
            allowNull: false
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    Articulo.associate = function(models) {
        Articulo.hasMany(models.carrito);
        Articulo.belongsTo(models.publicacion);
    };

    return Articulo;
}