const express = require("express");
const app = express();
const port = 8080;

app.get("/get_name ", (req, res) => {
  res.send("Home Page");
});

app.post("/save_user ", (req, res) => {
  res.send("DashBoard Page");
});

app.listen(port, () => {
  console.log("Server Started , Port ", port);
});
