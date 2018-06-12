module.exports = function (app, db) {
    /* Lista Usuarios*/
 app.get('/api/usuario/todos', function(req, res) {
    db.usuario.findAll({}).then(function(usuarios){
      res.json(usuarios)
    });
  });

  /* Get Usuario por credenciales LOGIN*/
 app.get('/api/usuario/login/:cedula', function(req, res) {
  db.usuario.findOne({ where: {cedula: req.params.cedula} }).then(function(usuario){
    res.json(usuario)
  });
});

app.get('/api/usuario/completo/:id', function(req, res) {
  db.usuario.findOne({ where: {id: req.params.id},
    include: [
      {
        model: db.pais,
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
      }
    ]
  }).then(function(usuario){
    res.json(usuario)
  });
});

/* Lista usuarios
  app.get('/api/usuario/completo', function(req, res) {
    db.usuario.findAll({  
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
  });*/

  /* Registrar usuarios*/
  app.post('/api/usuario/registrar', function(req, res) {
    db.usuario.create(req.body).then(function(created){
      res.json(created);
    });
  });
  
  /* Editar usuario*/
  app.put('/api/usuario/editar/:id', function(req, res) {
    db.usuario.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
  
  /* Eliminar usuario*/
  app.delete('/api/usuario/eliminar/:id', function(req, res) {
    db.usuario.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}