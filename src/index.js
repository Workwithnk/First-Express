const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.send("this is home page");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/wether", (req, res) => {
  res.send("this is wether page");
});

app.get("*", (req, res) => {
  res.send("404 , Oops page not found");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
