module.exports = function (app, db) {
    /* Lista Publicaciones*/
 app.get('/api/publicacion/todas', function(req, res) {
    db.publicacion.findAll({}).then(function(publicaciones){
      res.json(publicaciones)
    });
  });
  

  app.get('/api/publicacion/completa', function(req, res) {
    db.publicacion.findAll({  
      include: [
        {
          model: db.usuario 
        },
        {
          model: db.articulo 
        }
      ]
    }).then(function(publicaciones){
      res.json(publicaciones)
    });
  });

  app.get('/api/publicacion/categoria/:id', function(req, res) {
    db.publicacion.findAll({ where: {categoriumId: req.params.id}, 
      include: [
        {
          model: db.articulo 
        },
        {
          model: db.usuario 
        }
      ]
    }).then(function(publicaciones){
      res.json(publicaciones)
    });
  });

  //Publicaciones pertenecientes a un usuario
  app.get('/api/publicacion/activasusuario/:idusuario/:estatus', (req, res) => {
    db.publicacion.findAll({ where: {estatus: req.params.estatus, usuarioId: req.params.idusuario}, include: [
            { model: db.articulo }
        ]}, ).then(function(publicaciones){
          res.json(publicaciones)
        });
})

  /* Registrar publicacion*/
  app.post('/api/publicacion/registrar', function(req, res) {
    db.publicacion.create(req.body).then(function(created){
      res.json(created);
    });
  });
  
  /* Editar publicacion*/
  app.put('/api/publicacion/editar/:id', function(req, res) {
    db.publicacion.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
  
  /* Eliminar publicacion*/
  app.delete('/api/publicacion/eliminar/:id', function(req, res) {
    db.publicacion.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(resultado){
      res.json(resultado);
    });
  });
}