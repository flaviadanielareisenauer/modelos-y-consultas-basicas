let db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Movies.findAll()
      .then((resultados) => {
        res.render("moviesList", { movies: resultados });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  detail: (req, res) => {
    db.Movies.findByPk(+req.params.id).then((resultado) => {
      res.render("moviesDetail", { movie: resultado });
    });
  },
  new: (req, res) => {
    db.Movies.findAll({
      order: [["title", "ASC"]],
    })
      .then((resultados) => {
        res.render("newestMovies", { movies: resultados });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  recomended: (req, res) => {
    db.Movies.findAll({
      order: [["releaseDate", "DESC"]],
      limit: 5,
    })
      .then((resultados) => {
        res.render("recommendedMovies", { movies: resultados });
      })
      .catch((error) => {
        res.send(error);
      });
  },
};