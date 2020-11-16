const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist/angular-heroku-travis"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/angular-heroku-travis/index.html"));
});

app.listen(process.env.PORT || 8080);
