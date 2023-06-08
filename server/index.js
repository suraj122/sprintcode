const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const SUBMISSION = [];

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
