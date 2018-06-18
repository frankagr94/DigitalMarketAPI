module.exports = function (sequelize, DataTypes){
    var Usuario = sequelize.define("usuario", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cedula: {
            type: DataTypes.STRING(8),
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        foto: {
            type: DataTypes.STRING(255),
            defaultValue: ''
        },
        estatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.rol);
        Usuario.belongsTo(models.pais);
        Usuario.belongsTo(models.estado);
        Usuario.belongsTo(models.ciudad);
        Usuario.hasMany(models.publicacion);
        Usuario.hasMany(models.like);
        Usuario.hasMany(models.comentario);
        Usuario.hasOne(models.carrito);
    };

    return Usuario;
}