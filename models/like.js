module.exports = function (sequelize, DataTypes){
    var Like = sequelize.define("like", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    Like.associate = function(models) {
        Like.belongsTo(models.publicacion);
        Like.belongsTo(models.usuario);
    };

    return Like;
}