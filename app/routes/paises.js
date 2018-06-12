module.exports = function (app, db) {
    /* Lista Paises*/
 app.get('/api/pais/todos', function(req, res) {
    db.pais.findAll({}).then(function(paises){
      res.json(paises)
    });
  });

  /* Get Pais por ID*/
 app.get('/api/pais/especifico/:id', function(req, res) {
  db.pais.findOne({ where: {id: req.params.id} }).then(function(pais){
    res.json(pais)
  });
});

/* Lista Paises*/
  app.get('/api/pais/completo', function(req, res) {
    db.pais.findAll({  
      include: [
        {
          model: db.estado,
          include: [
            {
              model: db.ciudad
            }
          ]
        }
      ]
    }).then(function(paises){
      res.json(paises)
    });
  });

  /* Registrar Pais*/
  app.post('/api/pais/registrar', function(req, res) {
    db.pais.create({
      nombre: req.body.nombre
    }).then(function(created){
      res.json(created);
    });
  });
  
  /* Editar Pais*/
  app.put('/api/pais/editar/:id', function(req, res) {
    db.pais.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
  
  /* Eliminar Pais*/
  app.delete('/api/pais/eliminar/:id', function(req, res) {
    db.pais.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}