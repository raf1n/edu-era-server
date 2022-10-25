const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const courseCategories = require("./Data/courses-categories.json");

app.get("/", (req, res) => {
  res.send("Api running fine!");
});

app.get("/courses-categories", (req, res) => {
  res.send(courseCategories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
