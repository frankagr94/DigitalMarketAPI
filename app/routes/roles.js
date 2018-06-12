module.exports = function (app, db) {
    /* Lista Roles*/
 app.get('/api/rol/todos', function(req, res) {
    db.rol.findAll({}).then(function(roles){
      res.json(roles)
    });
  });
  
  /* Registrar Rol*/
  app.post('/api/rol/registrar', function(req, res) {
    db.rol.create({
      nombre: req.body.nombre
    }).then(function(created){
      res.json(created);
    });
  });
  
  /* Editar Rol*/
  app.put('/api/rol/editar/:id', function(req, res) {
    db.rol.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
  
  /* Eliminar Rol*/
  app.delete('/api/rol/eliminar/:id', function(req, res) {
    db.rol.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}