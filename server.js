import express from "express";
import graphbrainz from "graphbrainz";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", graphbrainz());
app.use(express.static(path.join(__dirname, "dist")));
app.use("*", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});
