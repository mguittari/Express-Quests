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
app.post("/api/users", hashedPassword, userControllers.postUser);

app.use(verifyToken);

// private routes

app.post("/api/movies", validateMovie, movieControllers.postMovie);
// app.post("/api/users", validateUser, userControllers.postUser);

app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
// app.put("/api/users/:id", validateUser, userControllers.updateUser);
app.put("/api/users/:id", hashedPassword, userControllers.updateUser);


app.delete("/api/movies/:id", movieControllers.deleteMovie);
app.delete("/api/users/:id", userControllers.deleteUser);

// const isItMatt = (req, res) => {
//   if (req.body.email === "matt@me.com" && req.body.password === "123456") {
//     res.send("Credentials are valid");
//   } else {
//     res.sendStatus(401);
//   }
// };





module.exports = app;
