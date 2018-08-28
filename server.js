"use strict";

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "dist")));
app.use("*", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});
