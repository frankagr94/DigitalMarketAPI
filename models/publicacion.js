module.exports = function (sequelize, DataTypes){
    var Publicacion = sequelize.define("publicacion", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE(),
            defaultValue: sequelize.NOW,
            allowNull: false
        },
        foto: {
            type: DataTypes.STRING(255),
            defaultValue: '',
            allowNull: false
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    Publicacion.associate = function(models) {
        Publicacion.belongsTo(models.usuario);
        Publicacion.hasMany(models.like);
        Publicacion.hasMany(models.comentario);
        Publicacion.hasOne(models.articulo);
        Publicacion.belongsTo(models.categoria)
    };

    return Publicacion;
}