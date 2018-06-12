module.exports = function (sequelize, DataTypes){
    var Comentario = sequelize.define("comentario", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        contenido: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.publicacion);
        Comentario.belongsTo(models.usuario);
    };

    return Comentario;
}