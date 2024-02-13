const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");
const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");
const { hashedPassword, verifyPassword, verifyToken } = require("./middlewares/auth");

app.use(express.json());

// public routes

app.get("/", movieControllers.welcome);
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUsersById);
app.post(
  "/api/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
app.post("/api/users", validateUser, hashedPassword, userControllers.postUser);



// private routes

app.use(verifyToken);

app.post("/api/movies", validateMovie, movieControllers.postMovie);

app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
app.put("/api/users/:id", validateUser, hashedPassword, userControllers.updateUser);

app.delete("/api/movies/:id", movieControllers.deleteMovie);
app.delete("/api/users/:id", userControllers.deleteUser);





module.exports = app;
