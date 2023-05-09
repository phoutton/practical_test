const express = require("express");
const app = express();

app.listen(3000);

app.get("/todo/", (req, res) => {
  // TODO: return todo list to user
});
app.post("/todo/add", (req, res) => {
  // TODO: add todo list item
});
