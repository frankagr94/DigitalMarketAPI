module.exports = function (app, db) {
    /* Lista Articulos*/
 app.get('/api/articulo/todos', function(req, res) {
    db.articulo.findAll({}).then(function(articulos){
      res.json(articulos)
    });
  });
  
  /* Registrar articulo*/
  app.post('/api/articulo/registrar', function(req, res) {
    db.articulo.create(req.body).then(function(created){
      res.json(created);
    });
  });
  
  /* Editar Articulo*/
  app.put('/api/articulo/editar/:id', function(req, res) {
    db.articulo.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
  
  /* Eliminar articulo*/
  app.delete('/api/articulo/eliminar/:id', function(req, res) {
    db.articulo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}