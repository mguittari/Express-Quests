const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");

app.get("/", (req, res) => {
res.send("Welcome to my favorite movie list");
});
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUsers);
app.get("/api/users/:id", movieControllers.getUsersById);

module.exports = app;
