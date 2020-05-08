const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(bodyParser.json());

app.use(cors());

const port = 3000;

let favorites = [];

app.get("/favorites", (request, response) => {
  response.send(favorites);
});

app.post("/favorites", (request, response) => {
  console.log(request.body);
  favorites = request.body;
  response.send(favorites);
});

app.listen(port, err => {
  console.log(`server is listening on ${port}`);
});
