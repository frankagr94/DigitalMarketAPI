module.exports = function (sequelize, DataTypes){
    var Categoria = sequelize.define("categoria", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(20),
            defaultValue: ''
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    Categoria.associate = function(models) {
        Categoria.hasMany(models.publicacion, {as: 'publicaciones'});
    };

    return Categoria;
}