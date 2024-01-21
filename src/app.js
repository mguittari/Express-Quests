const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");

app.use(express.json());

app.get("/", movieControllers.welcome);
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUsers);
app.get("/api/users/:id", movieControllers.getUsersById);

app.post("/api/movies", movieControllers.postMovie);
app.post("/api/users", movieControllers.postUser);

module.exports = app;
