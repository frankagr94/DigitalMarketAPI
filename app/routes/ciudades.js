module.exports = function (app, db) {
    /* Lista Ciudades*/
 app.get('/api/ciudad/todas', function(req, res) {
    db.ciudad.findAll({}).then(function(ciudades){
      res.json(ciudades)
    });
  });

 /* Get Ciudades por idEstado*/
 app.get('/api/ciudad/estado/:id', function(req, res) {
  db.ciudad.findAll({
    where: {
      estadoId: req.params.id
    }
  }).then(function(ciudades){
    res.json(ciudades)
  });
});
  
  /* Registrar Estado*/
  app.post('/api/ciudad/registrar', function(req, res) {
    db.ciudad.create({
      nombre: req.body.nombre
    }).then(function(created){
      res.json(created);
    });
  });
  
  /* Editar Ciudad*/
  app.put('/api/ciudad/editar/:id', function(req, res) {
    db.ciudad.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
  
  /* Eliminar Ciudad*/
  app.delete('/api/ciudad/eliminar/:id', function(req, res) {
    db.estado.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}