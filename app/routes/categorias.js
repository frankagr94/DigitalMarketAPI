module.exports = function (app, db) {
    /* Lista Categorias*/
 app.get('/api/categoria/todos', function(req, res) {
    db.categoria.findAll({}).then(function(articulos){
      res.json(articulos)
    });
  });
  
  /* Registrar categoria*/
  app.post('/api/categoria/registrar', function(req, res) {
    db.categoria.create({
      nombre: req.body.nombre,
      estatus: req.body.estatus
    }).then(function(created){
      res.json(created);
    });
  });
  
  /* Editar categoria*/
  app.put('/api/categoria/editar/:id', function(req, res) {
    db.categoria.save
    db.categoria.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
  
  /* Eliminar categoria*/
  app.delete('/api/categoria/eliminar/:id', function(req, res) {
    db.categoria.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}