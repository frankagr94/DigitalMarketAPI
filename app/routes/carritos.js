module.exports = function (app, db) {

  /* Get Carrito por IDUsuario*/
  app.get('/api/carrito/usuario/:idusuario', function(req, res) {
    db.carrito.findAll({ include: [
      {
        model: db.articulo,
        include: [
          {
            model: db.publicacion,
            include: [
              {
                model: db.usuario 
              } ]
          } ]
      }
    ], where: {usuarioId: req.params.idusuario} }).then(function(carrito){
      res.json(carrito)
    });
  });
  
  /* Agregar al Carrito*/
  app.post('/api/carrito/agregararticulo', function(req, res) {
    db.carrito.create(req.body).then(function(agregado){
      res.json(agregado);
    });
  });
  
  /* Eliminar Articulo en carrito*/
  app.delete('/api/carrito/eliminararticulo/:id', function(req, res) {
    db.carrito.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}