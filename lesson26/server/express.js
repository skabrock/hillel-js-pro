const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const users = require("./users.json");

const app = express();

const PORT = 3002;

app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // return res.send("Home page");
  res.render("home", {
    title: "test",
    title2: "h2 title",
  });
});

app.get("/users", (req, res) => {
  res.send(JSON.stringify(users));
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  res.send(JSON.stringify(user));
});

app.post("/users", (req, res) => {
  users.push(req.body);

  fs.writeFile("./users.json", JSON.stringify(users), (err, data) => {
    console.log(err);
    console.log(data);
  });

  res.send(JSON.stringify(users));
});

app.use(function (req, res) {
  res.status(404);

  if (req.accepts("html")) {
    res.render("404", { url: req.url });
  }
});
