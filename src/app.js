const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

app.use(express.json());

app.get("/", movieControllers.welcome);
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUsersById);

app.post("/api/movies", movieControllers.postMovie);
app.post("/api/users", userControllers.postUser);

app.put("/api/movies/:id", movieControllers.updateMovie);
app.put("/api/users/:id", userControllers.updateUser);

app.delete("/api/movies/:id", movieControllers.deleteMovie);
app.delete("/api/users/:id", userControllers.deleteUser);

module.exports = app;
