require("babel-register");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/api", (req, res) => {
  res.send("Root API");
});

app.get("/api/v1", (req, res) => {
  res.send("API version 1");
});

app.get("/api/v1/books/:id", (req, res) => {
  res.send(req.params);
});

app.listen(8080, () => console.log("Started on port 8080."));
