module.exports = function (app, db) {

    //Registrar Like
    app.post('/api/like/registrar', function(req, res) {
        db.like.create(req.body).then(function(created){
          res.json(created);
        });
      });
}