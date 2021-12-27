const db = require("../database/models");


module.exports = {
  list: (req, res) => {
    db.Actors.findAll()
      .then((resultados) => {
        res.render("actorsList", {
          actors: resultados,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  detail: (req, res) => {
    db.Actors.findByPk(+req.params.id)
      .then((resultado) => {
        res.render("actorDetail", {
          actor: resultado,
        });
      })
      .catch((err) => res.send(err));
  },
};