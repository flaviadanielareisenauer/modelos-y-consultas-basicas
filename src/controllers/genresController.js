let db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Genres.findAll().then((resultados) => {
      res.render("genresList", {
        genres: resultados,
      });
    });
  },
  detail: (req, res) => {
    db.Genres.findByPk(+req.params.id).then((resultados) => {
      res.render("genresDetail", {
        genre: resultados,
      });
    });
  },
};