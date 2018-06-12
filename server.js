var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var PORT = process.env.PORT || 3000;

//Declaracion de servicios
var roles = require('./app/routes/roles.js');
var paises = require('./app/routes/paises.js');
var estados = require('./app/routes/estados.js');
var carritos = require('./app/routes/carritos.js');
var ciudades = require('./app/routes/ciudades.js');
var articulos = require('./app/routes/articulos.js');
var usuarios = require('./app/routes/usuarios.js');
var categorias = require('./app/routes/categorias.js');
var publicaciones = require('./app/routes/publicaciones.js');

//Habilita a la APP Express a manejar el data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json"}));

//Static directory
app.use(express.static('app/public'));

//Inicializacion de servicios
roles(app, db);
paises(app, db);
estados(app, db);
carritos(app, db);
ciudades(app, db);
usuarios(app, db);
articulos(app, db);
categorias(app, db);
publicaciones(app, db);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log('Escuchando por Puerto '+PORT);
    });
});