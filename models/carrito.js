module.exports = function (sequelize, DataTypes){
    var Carrito = sequelize.define("carrito", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });

    Carrito.associate = function(models) {
        Carrito.belongsTo(models.usuario);
        Carrito.belongsTo(models.articulo);
    };

    return Carrito;
}