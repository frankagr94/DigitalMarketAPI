module.exports = function (app, db) {
    /* Lista Estados*/
 app.get('/api/estado/todos', function(req, res) {
    db.estado.findAll({}).then(function(estados){
      res.json(estados)
    });
  });

  /* Get Estado por idPais*/
 app.get('/api/estado/pais/:id', function(req, res) {
  db.estado.findAll({
    where: {
      paiId: req.params.id
    }
  }).then(function(estados){
    res.json(estados)
  });
});
  
  /* Registrar Estado*/
  app.post('/api/estado/registrar', function(req, res) {
    db.estado.create({
      nombre: req.body.nombre
    }).then(function(created){
      res.json(created);
    });
  });
  
  /* Editar Estado*/
  app.put('/api/estado/editar/:id', function(req, res) {
    db.estado.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
  
  /* Eliminar Estado*/
  app.delete('/api/estado/eliminar/:id', function(req, res) {
    db.estado.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}