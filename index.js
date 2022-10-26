const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const courseCategories = require("./Data/courses-categories.json");
const courseDetails = require("./Data/courses-details.json");
app.get("/", (req, res) => {
  res.send("Api running fine!");
});

app.get("/courses-categories", (req, res) => {
  res.send(courseCategories);
});

app.get("/courses", (req, res) => {
  res.send(courseDetails);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courseDetails.find((cd) => cd.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
